import { Component, OnInit, Input } from '@angular/core';
import { noop } from '../../../constants/noop.constant';
import { LearningActivity } from '../../../interfaces/learning-activity.interface';
import { argumentsRegex, anythingRegex } from '../../../constants/utils.constant';
import * as _ from "lodash";
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'physics-function-question',
  templateUrl: './physics-function-question.component.html',
  styleUrls: ['./physics-function-question.component.scss']
})
export class PhysicsFunctionQuestionComponent implements OnInit, LearningActivity {
  @Input() attributeData : PhysicsFunctionQuestionData;
  private data : PhysicsFunctionQuestionData;
  private interactionData : any;
  private physicsFnQuestionData : PhysicsFunctionQuestionData;
  private submitAction : (interactionId, response, isCorrect, details) => void;
  private updateAction : (interactionId, updatedData) => void;
  private currentInteraction;
  private attempted : number;
  private maxAttempts : number;

  private variables : Variables;
  private variablesArray : Array<any>;
  private variablesErrArray : Array<any>;
  private constants : Variables;
  private questions : Array<Question>;
  private answers : Array<string>;
  private validateValues : Array<number>;

  private changeValues : boolean = false;
  private exerciseName : string;

  private isCorrect : boolean = false;

  private readonly printVarClosure : (val) => string = 
    variable => variable.value + ' ' + variable.unit + ( variable.ref ? ' (' + variable.ref + ')' : '' );

  constructor() {}

  ngOnInit() {
    this.physicsFnQuestionData = this.attributeData ? this.attributeData : this.data;
    this.interactionData = this.data.LOCurrentState.interactions[
      this.physicsFnQuestionData.interactionId
    ];
    this.exerciseName = this.physicsFnQuestionData.name ? this.physicsFnQuestionData.name :
    this.data.name;
    this.answers = Array(this.physicsFnQuestionData.questions.length).fill('');

    let vars = _.clone(this.physicsFnQuestionData.variables);
    let consts = _.remove(vars, myVar => !myVar.mutable);
    this.variables = _.reduce(vars, this.buildVariableObj.bind(this), {});

    if (_.has(this.interactionData, 'data.updatedValues')) {
      Object.keys(this.interactionData.data.updatedValues).forEach(newValKey => {
        this.variables[newValKey] = this.interactionData.data.updatedValues[newValKey];
      });
    }

    this.variablesArray = _.filter(_.values(this.variables), v => v.mutable);
    this.variablesErrArray = _.map(this.variablesArray, v => false);
    _.each(this.variablesArray, v => {
      v.min = _.isNumber(v.min) && v.min >= 0 ? v.min : 0;
      v.max = _.isNumber(v.max) && v.max >= 0 ? v.max : 1000;
      if (v.max < v.min) {
        v.min = 0;
        v.max = 1000;
      }
    });

    this.constants = _.reduce(consts, this.buildVariableObj.bind(this), {});
    
    this.currentInteraction =
      this.physicsFnQuestionData.LOCurrentState.interactions[this.physicsFnQuestionData.interactionId];

    this.attempted = this.currentInteraction.attempts;
    this.maxAttempts = this.physicsFnQuestionData.attempts ? this.physicsFnQuestionData.attempts : 1;

    this.submitAction =
      this.physicsFnQuestionData.submitAction ? this.physicsFnQuestionData.submitAction : noop;

    this.updateAction =
      this.physicsFnQuestionData.updateAction ? this.physicsFnQuestionData.updateAction : noop;

    this.questions = _.map(this.physicsFnQuestionData.questions, q => {
      return {
        getStatement: () => {
          return this.replaceStrings(
            q.statement, _.extend(this.variables, this.constants), this.printVarClosure
          )
        },
        validateFn: q.validateFn,
        options: q.options
      }
    });
  }

  submitInteraction() {
    this.isCorrect = _.every(this.answers, (answer, idx) => {
      return this.questions[idx].validateFn(answer ,_.extend(this.variables, this.constants))
    });
    let response = _.reduce(this.answers, (acum, answer) => {
      let separator = acum.length > 0 ? ' / ' : '';
      return acum + separator + answer;
    }, '');

    this.attempted++;

    var details = {
      remainingAttempts: this.maxAttempts - this.attempted
    };

    if (!this.isCorrect && (this.maxAttempts - this.attempted <= 0)) {
      this.changeMutableValues();
      this.attempted = 0;
      details = _.extend(details, {
        updatedValues: _.pickBy(this.variables, v => v.mutable)
      });
    }

    this.submitAction(this.physicsFnQuestionData.interactionId, response, this.isCorrect, details);
  }

  getStatement() {
    return this.replaceStrings(
        this.physicsFnQuestionData.statement, _.extend(this.variables, this.constants),
        this.printVarClosure
    );
  }

  shouldDisableBtn() {
    return this.isCorrect || this.attempted >= this.maxAttempts || !_.every(this.answers, this.validateAnswerPattern.bind(this));
  }

  toggleChangeValues() {
    this.changeValues = !this.changeValues;

    if (this.changeValues) {
      this.validateValues = this.variablesArray.map(v => v.value);
    }
  }

  validateVariableValues() {
    this.variablesErrArray = _.map(this.variablesArray, v => {
      return !(_.isNumber(v.value) && v.value >= v.min && v.value <= v.max);
    });

    if (!_.some(this.variablesErrArray, e => e === true)) {
      if (!_.isEqual(this.validateValues, this.variablesArray.map(v => v.value))) {
        this.attempted = 0;
        this.updateAction(this.physicsFnQuestionData.interactionId, {
          resetInteraction: {
            updatedValues: _.pickBy(this.variables, v => v.mutable)
          }
        });
      }
      this.toggleChangeValues();
    }
  }

  private validateAnswerPattern(ans, idx) {
    let pattern = this.questions[idx].options.pattern;
    pattern = pattern instanceof RegExp ? pattern : anythingRegex;
    return !_.isEmpty(ans) && pattern.test(ans);
  }

  private replaceStrings(text : string, replaceFrom : any, pickValue ?: (val) => string) {
    let _txt = text;
    while(_txt.match(argumentsRegex) !== null) {
      let matches = _txt.match(argumentsRegex);
      _.forEach(matches, match => {
        let key = match.substring(2, match.length - 1);
        let replaceVal = '';
        if (_.has(replaceFrom, key)) {
          replaceVal = pickValue ? pickValue(replaceFrom[key]) : replaceFrom[key];
          replaceVal = replaceFrom[key].mutable ? '<strong>' + replaceVal + '</strong>' : replaceVal;
        }
        _txt = _txt.replace(match, replaceVal);
      });
    }
    return _txt;
  }

  private buildVariableObj(acum, myVar) {
    let varObj = {};
    varObj[myVar.name] = _.pick(myVar, ['ref', 'value', 'unit', 'tag', 'mutable', 'min', 'max']);
    return _.extend(acum, varObj);
  }

  private changeMutableValues() {
    this.variablesArray.forEach(v => {
      v.value = Math.floor(Math.random() * (v.max - v.min + 1)) + v.min;
    });
  }
}

export interface PhysicsFunctionQuestionData {
   name ?: string;
   interactionId : number;
   statement : string;
   variables : Array<any>;
   questions : Array<any>;
   answerOpts: Array<string>;
   correct: Array<number>;
   LOCurrentState: any;
   submitAction ?: any;
   updateAction ?: any;
   submitBtn ?: FunctionQuestionButton;
   SCORM ?: any;
   attempts ?: number;
}

interface Variables {
  [key: string] : {
    value: number,
    unit: string,
    mutable: boolean
    min ?: number;
    max ?: number;
  }
}

interface Question {
  getStatement : (val) => string;
  validateFn : (response, variables) => boolean;
  options : {
    pattern : RegExp
  };
}

interface FunctionQuestionButton {
  tag: string;
}
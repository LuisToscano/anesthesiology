import { Component, OnInit, Input } from '@angular/core';
import { noop } from '../../../constants/noop.constant';
import { LearningActivity } from '../../../interfaces/learning-activity.interface';
import { argumentsRegex, anythingRegex } from '../../../constants/utils.constant';
import * as _ from "lodash";

@Component({
  selector: 'physics-function-question',
  templateUrl: './physics-function-question.component.html',
  styleUrls: ['./physics-function-question.component.scss']
})
export class PhysicsFunctionQuestionComponent implements OnInit, LearningActivity {
  @Input() attributeData : PhysicsFunctionQuestionData;
  private data : PhysicsFunctionQuestionData;
  private physicsFnQuestionData : PhysicsFunctionQuestionData;
  private submitAction : (interactionId, response, isCorrect, details) => void;
  private currentInteraction;
  private attempted : number;
  private maxAttempts : number;

  private variables : Variables;
  private variablesArray : Array<any>;
  private constants : Variables;
  private questions : Array<Question>;
  private answers : Array<string>;

  private changeValues : boolean = false;
  private exerciseName : string;

  private readonly printVarClosure : (val) => string = 
    variable => variable.value + ' ' + variable.unit;

  constructor() {}

  ngOnInit() {
    this.physicsFnQuestionData = this.attributeData ? this.attributeData : this.data;
    this.exerciseName = this.physicsFnQuestionData.name ? this.physicsFnQuestionData.name :
    this.data.name;
    this.answers = Array(this.physicsFnQuestionData.questions.length).fill('');

    let vars = _.clone(this.physicsFnQuestionData.variables);
    let consts = _.remove(vars, myVar => !myVar.mutable);
    this.variables = _.reduce(vars, this.buildVariableObj.bind(this), {});
    this.variablesArray = _.values(this.variables);
    this.constants = _.reduce(consts, this.buildVariableObj.bind(this), {});
    
    this.currentInteraction =
      this.physicsFnQuestionData.LOCurrentState.interactions[this.physicsFnQuestionData.interactionId];

    this.attempted = this.currentInteraction.attempts;
    this.maxAttempts = this.physicsFnQuestionData.attempts ? this.physicsFnQuestionData.attempts : 1;

    this.submitAction =
      this.physicsFnQuestionData.submitAction ? this.physicsFnQuestionData.submitAction : noop;

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
    let allCorrect = _.every(this.answers, (answer, idx) => {
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

    this.submitAction(this.physicsFnQuestionData.interactionId, response, allCorrect, details);
  }

  getStatement() {
    return this.replaceStrings(
        this.physicsFnQuestionData.statement, _.extend(this.variables, this.constants),
        this.printVarClosure
    );
  }

  shouldDisableBtn() {
    return this.attempted >= this.maxAttempts || !_.every(this.answers, this.validateAnswerPattern.bind(this));
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
        }
        _txt = _txt.replace(match, replaceVal);
      });
    }
    return _txt;
  }

  private buildVariableObj(acum, myVar) {
    let varObj = {};
    varObj[myVar.name] = _.pick(myVar, ['value', 'unit', 'tag']);
    return _.extend(acum, varObj);
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
   submitBtn ?: FunctionQuestionButton;
   SCORM ?: any;
   attempts ?: number;
}

interface Variables {
  [key: string] : {
    value: number,
    unit: string
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
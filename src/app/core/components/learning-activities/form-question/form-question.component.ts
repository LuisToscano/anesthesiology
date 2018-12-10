import { Component, OnInit, Input } from '@angular/core';
import { noop } from '../../../constants/noop.constant';
import { LearningActivity } from '../../../interfaces/learning-activity.interface';
import * as _ from "lodash";

@Component({
  selector: 'form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent implements OnInit, LearningActivity {
  @Input() attributeData : FormQuestionData;
  private data : FormQuestionData;
  private formQuestionData : FormQuestionData;
  private userResponse : any = {};
  private submitAction : (interactionId, response, isCorrect) => void;
  private currentInteraction;
  private questionType : QuestionType;
  private isResponseObjectReady : boolean = false;
  private attempted : number;
  private maxAttempts : number;

  constructor() {}

  ngOnInit() {
    this.formQuestionData = this.attributeData ? this.attributeData : this.data;
    this.questionType = this.formQuestionData.correct.length === 1 ?
      QuestionType.OneAnswer : QuestionType.MultipleAnswers;
    this.currentInteraction =
      this.formQuestionData.LOCurrentState.interactions[this.formQuestionData.interactionId];
    this.attempted = this.currentInteraction.attempts;
    this.maxAttempts = this.formQuestionData.attempts ? this.formQuestionData.attempts : 1;
    this.submitAction =
      this.formQuestionData.submitAction ? this.formQuestionData.submitAction : noop;
    this.prepareResponseObj();
    this.decryptResponseString();
  }

  submitInteraction() {
    let grade = this.questionType === QuestionType.OneAnswer ?
      this.gradeInteractionForOneAnswer() : this.gradeInteractionForMultipleAnswers();
    this.submitAction(this.formQuestionData.interactionId, grade.response, grade.isCorrect);
    this.attempted++;
  }

  private gradeInteractionForOneAnswer() {
    return {
      response: this.formQuestionData
        .answerOpts[this.userResponse[this.formQuestionData.interactionId]],
      isCorrect: _.isEmpty(_.difference(
        _.compact(_.values(this.userResponse)), this.formQuestionData.correct
      ))
    };
  }

  private gradeInteractionForMultipleAnswers() {
    let checkedResponses = _.pickBy(this.userResponse, response => {
      return response === true;
    });
    return {
      response: _.reduce(checkedResponses, this.buildResponseString.bind(this) , ''),
      isCorrect: _.isEmpty(_.difference(
        _.map(_.keys(checkedResponses), _.parseInt), this.formQuestionData.correct
      ))
    };
  }

  private buildResponseString(acum, answerOpt, answerKey) {
    let strAnswer = this.formQuestionData.answerOpts[answerKey];
    let separator = acum.length > 0 ? ' / ' : '';
    return acum + separator + strAnswer;
  }

  private decryptResponseString() {
    this.questionType === QuestionType.OneAnswer ?
      this.decryptResponseStringForOneAnswer() :
      this.decryptResponseStringForMultipleAnswers();
  }

  private decryptResponseStringForOneAnswer() {
    let idx = _.indexOf(this.formQuestionData.answerOpts, this.currentInteraction.response);
    if (idx > 0) {
      this.userResponse[this.formQuestionData.interactionId] = idx;
    }
  }

  private decryptResponseStringForMultipleAnswers() {
    let responses = this.currentInteraction.response.split(' / ');
    _.each(responses, resp => {
      let idx = _.indexOf(this.formQuestionData.answerOpts, resp);
      if (idx >= 0) {
        this.userResponse[idx] = true;
      }
    });
  }

  private prepareResponseObj() {
    this.questionType === QuestionType.OneAnswer ?
      this.prepareResponseObjForOneAnswer() :
      this.prepareResponseObjForMultipleAnswers();
    this.isResponseObjectReady = true;
  }

  private prepareResponseObjForOneAnswer() {
    _.range(this.formQuestionData.answerOpts.length).forEach((i) => {
      this.userResponse[i] = null;
    });
  }

  private prepareResponseObjForMultipleAnswers() {
    this.userResponse[this.formQuestionData.interactionId] = null;
  }
}

export interface FormQuestionData {
   interactionId : number;
   statement : string;
   answerOpts: Array<string>;
   correct: Array<number>;
   LOCurrentState: any;
   submitAction ?: any;
   submitBtn ?: FormQuestionButton;
   SCORM ?: any;
   attempts ?: number;
}

interface FormQuestionButton {
  tag: string;
}

enum QuestionType {
  OneAnswer, MultipleAnswers
}
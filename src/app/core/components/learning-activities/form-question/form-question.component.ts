import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent implements OnInit {
  @Input() attributeData : FormQuestionData;
  data : FormQuestionData;
  formQuestionData : FormQuestionData;
  userResponse : any = {};
  isResponseObjectReady : boolean = false;
  submitAction : (interactionId, response, isCorrect) => void;
  private currentInteraction;
  private attempted : number;
  private attempts : number;

  constructor() {}

  ngOnInit() {
    this.formQuestionData = this.attributeData ? this.attributeData : this.data;
    this.currentInteraction =
      this.formQuestionData.LOCurrentState.interactions[this.formQuestionData.interactionId];
    this.attempted = this.currentInteraction.attempts;
    this.attempts = this.formQuestionData.attempts ? this.formQuestionData.attempts : 1;
    this.submitAction = this.formQuestionData.submitAction ? this.formQuestionData.submitAction :
      () => { return undefined; };
    this.prepareUserResponseObj();
    this.decryptResponseObj();
  }

  submitInteraction() {
    let response;
    let isCorrect;
    if (this.formQuestionData.correct.length === 1) {
      //ONE CORRECT ANSWER
      response = this.formQuestionData
        .answerOpts[this.userResponse[this.formQuestionData.interactionId]];
      isCorrect = _.isEmpty(_.difference(
        _.values(this.userResponse), this.formQuestionData.correct
      ));
    } else {
      //MULTIPLE CORRECT ANSWERS
      let checkedResponses = _.pickBy(this.userResponse, response => {
        return response === true;
      });
      response = _.reduce(checkedResponses, this.buildResponseString.bind(this) , '');
      isCorrect = _.isEmpty(_.difference(
          _.map(_.keys(checkedResponses), _.parseInt), this.formQuestionData.correct
      ));
    }
    this.submitAction(this.formQuestionData.interactionId, response, isCorrect);
    this.attempted++;
  }

  private buildResponseString(acum, answerOpt, answerKey) {
    let strAnswer = this.formQuestionData.answerOpts[answerKey];
    let separator = acum.length > 0 ? ' / ' : '';
    return acum + separator + strAnswer;
  }

  private prepareUserResponseObj() {
    if (this.formQuestionData.correct.length > 1) {
      //ONE CORRECT ANSWER
      _.range(this.formQuestionData.answerOpts.length).forEach((i) => {
        this.userResponse[i] = null;
      });
    } else {
      //MULTIPLE CORRECT ANSWERS
      this.userResponse[this.formQuestionData.interactionId] = null;
    }
    this.isResponseObjectReady = true;
  }

  private decryptResponseObj() {
    if (this.formQuestionData.correct.length === 1) {
      //ONE CORRECT ANSWER
      let idx =
        _.indexOf(this.formQuestionData.answerOpts, this.currentInteraction.response);
      if (idx > 0) {
        this.userResponse[this.formQuestionData.interactionId] = idx;
      }
    } else {
      //MULTIPLE CORRECT ANSWERS
      let responses = this.currentInteraction.response.split(' / ');
      _.each(responses, resp => {
        let idx = _.indexOf(this.formQuestionData.answerOpts, resp);
        if (idx >= 0) {
          this.userResponse[idx] = true;
        }
      });
    }
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
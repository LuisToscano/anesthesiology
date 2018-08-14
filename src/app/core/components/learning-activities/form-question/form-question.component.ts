import { Component, OnInit, Input } from '@angular/core';
import { SCORMProvider } from '../../../providers/scorm.provider';
import * as _ from "lodash";
import { SummaryResolver } from '../../../../../../node_modules/@angular/compiler';

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

  constructor(private scorm : SCORMProvider) {}

  ngOnInit() {
    this.formQuestionData = this.attributeData ? this.attributeData : this.data;
    this.prepareUserResponseObj();
  }

  submitInteraction() {
    let response;
    let isCorrect;
    if (this.formQuestionData.correct.length === 1) {
      response = this.formQuestionData
        .answerOpts[this.userResponse[this.formQuestionData.interactionId]];
      isCorrect = _.difference(_.map(this.userResponse, (val) => val),
      this.formQuestionData.correct).length === 0
    } else {
      response = _.reduce(_.filter(Object.keys(this.userResponse), this.filterIfChecked.bind(this)),
      this.buildResponseString.bind(this), '');
      isCorrect = _.difference(_.map(_.filter(
            Object.keys(this.userResponse), this.filterIfChecked.bind(this)),
          (key) => { return parseInt(key) }),
        this.formQuestionData.correct).length === 0;
    }
    this.scorm.submitInteraction(this.formQuestionData.interactionId, response, isCorrect);
  }

  private filterIfChecked(key) {
    return this.userResponse[key] === true;
  }

  private buildResponseString(sum, n) {
    let strAnswer = this.formQuestionData.answerOpts[n];
    return sum.length > 0 ? sum + ' / ' + strAnswer : strAnswer;
  }

  private prepareUserResponseObj() {
    if (this.formQuestionData.correct.length > 1) {
      _.range(this.formQuestionData.answerOpts.length).forEach((i) => {
        this.userResponse[i] = null;
      });
    } else {
      this.userResponse[this.formQuestionData.interactionId] = null;
    }
    this.isResponseObjectReady = true;
  }
}

export interface FormQuestionData {
   interactionId : number;
   statement : string;
   answerOpts: Array<string>;
   correct: Array<number>;
   submitBtn ?: FormQuestionButton;
   SCORM ?: any;
}

interface FormQuestionButton {
  tag: string;
}
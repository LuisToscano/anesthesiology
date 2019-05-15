import { Component, OnInit, Input } from '@angular/core';
import { ModalProvider } from '../../../../providers/modal-provider';
import { NavigationProvider } from '../../../../providers/navigation.provider';
import { activitySubmitModali18n } from '../i18n/activity-submit.i18n';
import * as _ from "lodash";

@Component({
  selector: 'activity-submit-modal',
  templateUrl: './activity-submit-modal.html',
  styleUrls: ['./activity-submit-modal.scss']
})
export class ActivitySubmitModal implements OnInit {

  remainingAttempts : number;
  data : ActivityErrorModalData;
  currentInteraction : any;
  correct : boolean;
  i18n : any;

  constructor(private modal : ModalProvider, private navigation : NavigationProvider) {}

  ngOnInit() {
    this.currentInteraction = this.data.LOCurrentState.interactions[this.data.interactionId];
    this.correct = this.data.correct ? this.data.correct : false;
    this.i18n = this.correct ? activitySubmitModali18n.success : activitySubmitModali18n.error;
    this.remainingAttempts = _.isNumber(this.data.remainingAttempts) ? this.data.remainingAttempts : -1;
  }

  close() {
    this.modal.hideModal();
  }

  backToMenu() {
    this.modal.hideModal();
    this.navigation.goToSectionSlide('scenarios', 0)
  }
}

interface ActivityErrorModalData{
  LOCurrentState : any;
  interactionId : number;
  remainingAttempts : number;
  response: string;
  correct : boolean;
}
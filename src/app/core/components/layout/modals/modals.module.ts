// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

//BASE
import { ActivitySubmitModal } from './activity-submit/activity-submit-modal';
import { LOCompletionModal } from './lo-completion-modal/lo-completion-modal';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ActivitySubmitModal,
    LOCompletionModal
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [
    ActivitySubmitModal,
    LOCompletionModal
  ],
  entryComponents: [
    ActivitySubmitModal,
    LOCompletionModal
  ]
})
export class ModalsModule { }
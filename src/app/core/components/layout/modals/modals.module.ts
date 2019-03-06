// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

//BASE
import { ActivitySubmitModal } from './activity-submit/activity-submit-modal';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ActivitySubmitModal
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [
    ActivitySubmitModal
  ],
  entryComponents: [
    ActivitySubmitModal
  ]
})
export class ModalsModule { }
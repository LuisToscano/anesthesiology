// imports
import { NgModule } from '@angular/core';

//BASE
import { ActivityErrorModal } from './activity-error/activity-error-modal';
import { ActivitySuccessModal } from './activity-success/activity-success-modal';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ActivityErrorModal,
    ActivitySuccessModal
  ],
  imports: [],
  providers: [],
  exports: [
    ActivityErrorModal,
    ActivitySuccessModal
  ],
  entryComponents: [
    ActivityErrorModal,
    ActivitySuccessModal
  ]
})
export class ModalsModule { }
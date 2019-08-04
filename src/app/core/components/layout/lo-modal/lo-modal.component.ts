import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalProvider } from '../../../providers/modal-provider';
import { Subscription } from "rxjs";

@Component({
  selector: 'lo-modal',
  templateUrl: './lo-modal.component.html',
  styleUrls: ['./lo-modal.component.scss']
})
export class LOModalComponent implements OnInit, OnDestroy{

  @Input() LOCurrentState : any;
  @Input() hideCloseIcon : boolean = false;
  innerComponent : any;
  shouldDisplayModal : boolean = false;
  private checkChangesSubscription : Subscription;

  constructor(private modal : ModalProvider) {}

  ngOnInit() {
    this.checkChangesSubscription = this.modal.modalContentChange.subscribe(component => {
      this.innerComponent = component;
      this.shouldDisplayModal = !!component;
    });
  }

  ngOnDestroy() {
    if (this.checkChangesSubscription) {
      this.checkChangesSubscription.unsubscribe();
    }
  }

  close() {
    this.modal.hideModal();
  }
}
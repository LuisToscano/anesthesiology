import { Component, OnInit, Input } from '@angular/core';
import { ModalProvider } from '../../../providers/modal-provider';

@Component({
  selector: 'lo-modal',
  templateUrl: './lo-modal.component.html',
  styleUrls: ['./lo-modal.component.scss']
})
export class LOModalComponent implements OnInit {

  @Input() LOCurrentState : any;

  constructor(private modal : ModalProvider) {}

  ngOnInit() {}

  close() {
    this.modal.hideModal();
  } 
}
import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { ModalProvider } from '../providers/modal-provider';

@Directive({
  selector: '[displayModal]'
})
export class DisplayModalDirective {
    @Input('displayModal') modalData: any;

    constructor(private el: ElementRef, private modal : ModalProvider) {}

    @HostListener('click') onClick() {
      this.modal.showModal(this.modalData);
    }
    
}
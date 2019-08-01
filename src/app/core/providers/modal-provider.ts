import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class ModalProvider {
  private isVisible : boolean;
  private innerComponent : any;

  modalContentChange = new Subject<any>();

  public showModal(innerComponent) {
    this.innerComponent = innerComponent;
    this.isVisible = true;
    this.modalContentChange.next(innerComponent);
  }

  public hideModal() {
    this.innerComponent = null;
    this.isVisible = false;
    this.modalContentChange.next(null);
  }

  public getVisible() {
    return this.isVisible;
  }

  public getInnerComponent() {
    return this.innerComponent;
  }
}

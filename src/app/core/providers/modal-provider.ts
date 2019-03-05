import { Injectable } from '@angular/core';

@Injectable()
export class ModalProvider {
  private isVisible : boolean;
  private innerComponent : any;

  public showModal(innerComponent) {
    this.innerComponent = innerComponent;
    this.isVisible = true;
  }

  public hideModal() {
    this.innerComponent = null;
    this.isVisible = false;
  }

  public getVisible() {
    return this.isVisible;
  }

  public getInnerComponent() {
    return this.innerComponent;
  }
}

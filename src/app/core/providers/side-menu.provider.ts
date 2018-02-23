import { Injectable } from '@angular/core';

@Injectable()
export class SideMenuProvider {
  private isVisible : any;

  public toggleVisible() {
    this.setVisible(!this.getVisible());
  }

  public setVisible(visible) {
    this.isVisible = visible;
  }

  public getVisible() {
    return this.isVisible;
  }
}

import { Component, Input } from '@angular/core';
import { MenuBarElement } from '../../../interfaces/menu-bar-element.interface';
import * as _ from "lodash";

@Component({
  selector: 'lo-secondary-nav-bar',
  templateUrl: './secondary-nav-bar.component.html',
  styleUrls: ['./secondary-nav-bar.component.scss']
})
export class SecondaryNavBarComponent {
  
  @Input() elements : Array<MenuBarElement>;
  
  getElementClass(el : MenuBarElement) {
    return el.isActive && el.isActive() ? 'is-active' : '';
  }

  elementClick(el : MenuBarElement) {
    if (el.onClick) {
      el.onClick()
    }
  }
}

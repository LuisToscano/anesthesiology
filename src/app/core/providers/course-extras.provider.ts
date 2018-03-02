import { Injectable } from '@angular/core';
import { contentConstants } from '../../../course-content';
import { NavigationProvider } from '../../core/providers/navigation.provider';
import { MenuBarElement } from '../interfaces/menu-bar-element.interface';
import * as _ from "lodash";

@Injectable()
export class CourseExtrasProvider {
  private menuBarActions = {};

  constructor(private navigation : NavigationProvider) {
    this.menuBarActions[contentConstants.actions.goToSection] = data => {
        return () => { this.navigation.goToSection(data.target); };
    };
  }

  createMenuBarElementsArray(elemsData : Array<MenuBarElementData>) : Array<MenuBarElement> {
    return _.map(elemsData, elData => {
        return {
            iconClass: elData.iconClass,
            text: elData.text,
            isActive: false,
            onClick: this.addMenuBarElementAction(elData)
        };
    });
  }

  private addMenuBarElementAction(elemData : MenuBarElementData) {
    return this.menuBarActions.hasOwnProperty(elemData.action) ?
    this.menuBarActions[elemData.action](elemData.data) : () => {};
  }
}

interface MenuBarElementData {
    iconClass: string;
    text : string;
    action : string;
    data : {}
}

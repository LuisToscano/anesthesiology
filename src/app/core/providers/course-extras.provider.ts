import { Injectable } from '@angular/core';
import { NavigationProvider } from '../../core/providers/navigation.provider';
import { MenuBarElement } from '../interfaces/menu-bar-element.interface';
import * as _ from "lodash";

const contentConstants = {
    actions: {
        goToSection: 'goToSection',
        popup: 'popup'
    }
};

@Injectable()
export class CourseExtrasProvider {
  private menuBarActions = {};

  constructor(private navigation : NavigationProvider) {
    this.menuBarActions[contentConstants.actions.goToSection] = data => {
        return {
            onClick: () => { this.navigation.goToSection(data.target); },
            isActive: () => {
                return this.navigation.getCurrentPosition().section.getId() === data.target;
            }
        }
    };

    this.menuBarActions[contentConstants.actions.popup] = data => {
        return {
            onClick: () => {},
            isActive: () => { return false; }
        };
    };
  }

  createMenuBarElementsArray(elemsData : Array<MenuBarElementData>) : Array<MenuBarElement> {
    return _.map(elemsData, elData => {
        return _.extend({
            iconClass: elData.iconClass,
            text: elData.text
        }, this.addMenuBarElementAction(elData));
    });
  }

  private addMenuBarElementAction(elemData : MenuBarElementData) {
    return this.menuBarActions.hasOwnProperty(elemData.action) ?
    this.menuBarActions[elemData.action](elemData.data) : {};
  }
}

interface MenuBarElementData {
    iconClass: string;
    text : string;
    action : string;
    data : {}
}

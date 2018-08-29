import { Injectable } from '@angular/core';
import { NavigationProvider } from './navigation.provider';
import { MenuBarAction } from '../enums/lo-extras.enum';
import * as _ from "lodash";

@Injectable()
export class LOExtrasProvider {

    private menuBarActions = {};

    constructor(
        private navigation : NavigationProvider
    ) {
        this.menuBarActions[MenuBarAction.GoToSection] = (data) => {
            return {
                onClick: () => {
                    console.log('*******************************', data.target); 
                    this.navigation.goToSectionSlide(data.target, 0); },
                isActive: () => {
                    return this.navigation.getCurrentPosition().section.getId() === data.target;
                }
            }
        }
    }

    prepareMenuBarElements(elems : Array<any>) {
        return _.map(elems, (el) => {
            return _.extend({
                text: el.text,
            }, this.menuBarActions.hasOwnProperty(el.action) ?
            this.menuBarActions[el.action](el.data) : {})
        });
    }
}
import { MenuBarAction } from '../core/enums/lo-extras.enum';
import { Sections } from '../core/interfaces/lo-content.interface';
import * as _ from "lodash";

let menuBarActions = {};
menuBarActions[MenuBarAction.GoToSection] = (section : Sections) => {
    return {
        data: {
            target: section.id
        }
    }
};

export const LOHelper = {
    createMenuBarAction: (section : Sections, action : MenuBarAction) => {
        return _.extend({
            text: section.name,
            action: action
        }, menuBarActions.hasOwnProperty(action) ? menuBarActions[action](section) : {});
    }
};
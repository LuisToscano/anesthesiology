import { ElementAction } from '../core/enums/element-action.enum';
import { Sections } from '../core/interfaces/lo-content.interface';
import * as _ from "lodash";

let menuBarActions = {};
menuBarActions[ElementAction.GoToSection] = (section : Sections) => {
    return {
        data: {
            target: section.id
        }
    }
};

export const LOHelper = {
    createElementAction: (section : Sections, action : ElementAction) => {
        return _.extend({
            text: section.name,
            action: action
        }, menuBarActions.hasOwnProperty(action) ? menuBarActions[action](section) : {});
    }
};
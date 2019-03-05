import { Injectable } from '@angular/core';
import { NavigationProvider } from './navigation.provider';
import { SCORMProvider } from './scorm.provider';
import { InteractionsProvider } from './interactions.provider';
import { ModalProvider } from './modal-provider';
import { ElementAction } from '../enums/element-action.enum';
import { Element } from '../interfaces/lo-content.interface';
import { InteractionsActions } from '../constants/interaction-actions.constant';
import { ElementActions } from '../constants/element-actions.constant';
import { Http } from '@angular/http';
import * as _ from "lodash";

@Injectable()
export class ActionsProvider {
    constructor(
        private scorm : SCORMProvider,
        private interactions : InteractionsProvider,
        private navigation : NavigationProvider,
        private modal : ModalProvider,
        private http : Http
    ) {}

    prepareMenuBarElements(elems : Array<any>) {
        return _.map(elems, el => {
            return this.extendObjectUsingDataActions({
                text: el.text
            }, el.data, el.actions)
        });
    }

    prepareElementAction(elem : any) {
        return this.extendObjectUsingDataActions(elem.data, elem.data, elem.actions);;
    }

    prepareSubmitAction(data) {
        return (interactionId, response, isCorrect) => {
            this.interactions.submitInteraction(interactionId, response, isCorrect);
            this.scorm.submitInteraction(interactionId, response, isCorrect);
            if (InteractionsActions.hasOwnProperty(data.onSubmit)) {
                InteractionsActions[data.onSubmit](response, isCorrect, {
                    navigation: this.navigation,
                    modal: this.modal,
                    http: this.http
                });
            }
        }
    }

    private extendObjectUsingDataActions(obj, data, actions : Array<any>) {
        return _.extend(obj, this.retrieveActionsObj(data, actions));
    }

    private retrieveActionsObj(data, actions : Array<ElementAction>){
        let _navigation = this.navigation;
        let _interactions = this.interactions;
        return _.reduce(actions, function(acum, action) {
            return _.extend(acum, ElementActions.hasOwnProperty(action) ?
            ElementActions[action](data, {
                navigation: _navigation,
                interactions: _interactions
            }) : {});
        }, {});
    }
}
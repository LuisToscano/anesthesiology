import { Injectable } from '@angular/core';
import { NavigationProvider } from './navigation.provider';
import { SCORMProvider } from './scorm.provider';
import { InteractionsProvider } from './interactions.provider';
import { ElementAction } from '../enums/element-action.enum';
import { InteractionSubmitAction } from '../enums/interactions.enum';
import { Element } from '../interfaces/lo-content.interface';
import * as _ from "lodash";

@Injectable()
export class ActionsProvider {

    private elementActions = {};
    private interactionActions = {};

    constructor(
        private navigation : NavigationProvider,
        private scorm : SCORMProvider,
        private interactions : InteractionsProvider
    ) {
        this.interactionActions[InteractionSubmitAction.Alert] = (response, correct) => {
            alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
        }

        this.interactionActions[InteractionSubmitAction.GoToPrevious] = (response, correct) => {
            alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
            this.navigation.previousSlide();
        }

        this.elementActions[ElementAction.GoToSection] = (data) => {
            return {
                onClick: () => {
                    this.navigation.goToSectionSlide(data.target, 0); 
                }
            };
        };

        this.elementActions[ElementAction.GoToSectionSlide] = (data) => {
            return {
                onClick: data.target ? () => {
                    this.navigation.goToSectionSlide(data.target.section, data.target.slide); 
                } : () => {}
            };
        };

        this.elementActions[ElementAction.GoToSlide] = (data) => {
            return {
                onClick: data.target ? () => {
                    this.navigation.goToSectionSlide(
                        this.navigation.getCurrentPosition().section.getId(),
                        data.target
                    ); 
                } : () => {}
            };
        };

        this.elementActions[ElementAction.ActiveIfCurrentSection] = (data) => {
            return {
                isActive: () => {
                    return this.navigation.getCurrentPosition().section.getId() === data.target;
                }
            };
        };

        this.elementActions[ElementAction.ActiveIfSlideInteractionsDone] = (data) => {
            return {
                isActive: () => {
                    return this.interactions.areAllSlideInteractionsCorrect(
                        this.navigation.getCurrentPosition().section.getId(),
                        data.target
                    )
                }
            };
        };
    }

    prepareMenuBarElements(elems : Array<any>) {
        return _.map(elems, el => {
            return this.extendObjectUsingDataActions({
                text: el.text
            }, el.data, el.actions)
        });
    }

    prepareElementAction(elem : Element) {
        return this.extendObjectUsingDataActions(elem.data, elem.data, elem.actions);;
    }

    prepareSubmitAction(data) {
        return (interactionId, response, isCorrect) => {
            this.interactions.submitInteraction(interactionId, response, isCorrect);
            this.scorm.submitInteraction(interactionId, response, isCorrect);
            if (this.interactionActions.hasOwnProperty(data.onSubmit)) {
                this.interactionActions[data.onSubmit](response, isCorrect);
            }
        }
    }

    private extendObjectUsingDataActions(obj, data, actions : Array<any>) {
        return _.extend(obj, this.retrieveActionsObj(data, actions));
    }

    private retrieveActionsObj(data, actions : Array<ElementAction>){
        var _actions = this.elementActions;
        return _.reduce(actions, function(acum, action) {
            return _.extend(acum, _actions.hasOwnProperty(action) ?
            _actions[action](data) : {});
        }, {});
    }
}
import { Injectable } from '@angular/core';
import { InteractionSubmitAction } from '../enums/interactions.enum';
import { SCORMProvider } from '../providers/scorm.provider';
import * as _ from "lodash";

@Injectable()
export class InteractionsProvider {

    private interactionActions = {};

    constructor(
        private scorm : SCORMProvider
    ) {
        this.interactionActions[InteractionSubmitAction.Alert] = (response, correct) => {
            alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
        }
    }

    prepareSubmitAction(data) {
        return (interactionId, response, isCorrect) => {
            this.scorm.submitInteraction(interactionId, response, isCorrect);
            if (this.interactionActions.hasOwnProperty(data.onSubmit)) {
                this.interactionActions[data.onSubmit](response, isCorrect);
            }
        }
    }
}
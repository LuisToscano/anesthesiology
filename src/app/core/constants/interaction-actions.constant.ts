import { InteractionSubmitAction } from '../enums/interactions.enum';
import { ActivitySubmitModal } from '../components/layout/modals/activity-submit/activity-submit-modal';
import * as _ from "lodash";

var interactions = {};

interactions[InteractionSubmitAction.Alert] = (response, correct, details) => {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
}

interactions[InteractionSubmitAction.GoToPrevious] = (response, correct, details, providers) => {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
    providers.navigation.previousSlide();
}

interactions[InteractionSubmitAction.DisplayModal] = (response, correct, details, providers) => {
    var innerComponent = {
        component: ActivitySubmitModal,
        data: _.extend({
            response: response,
            correct: correct
        }, details)
    }
    providers.modal.showModal(innerComponent);
}

export const InteractionsActions = interactions;
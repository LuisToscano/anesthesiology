import { InteractionSubmitAction } from '../enums/interactions.enum';
import { ActivityErrorModal } from '../components/layout/modals/activity-error/activity-error-modal';
import { ActivitySuccessModal } from '../components/layout/modals/activity-success/activity-success-modal';

var interactions = {};

interactions[InteractionSubmitAction.Alert] = (response, correct) => {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
}

interactions[InteractionSubmitAction.GoToPrevious] = (response, correct, providers) => {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
    providers.navigation.previousSlide();
}

interactions[InteractionSubmitAction.DisplayModal] = (response, correct, providers) => {
    var innerComponent = {
        component: correct ? ActivitySuccessModal : ActivityErrorModal,
        data: {}
    }
    providers.modal.showModal(innerComponent);
}

export const InteractionsActions = interactions;
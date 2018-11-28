import { InteractionSubmitAction } from '../enums/interactions.enum';
var interactions = {};

interactions[InteractionSubmitAction.Alert] = (response, correct) => {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
}

interactions[InteractionSubmitAction.GoToPrevious] = (response, correct, providers) => {
    alert('Respuesta ' + (correct ? 'correcta' : 'incorrecta'));
    providers.navigation.previousSlide();
}

export const InteractionsActions = interactions;
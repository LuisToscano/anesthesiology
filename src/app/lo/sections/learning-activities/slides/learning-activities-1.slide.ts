import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { SCORMInteractionType } from '../../../../core/enums/scorm.enum';
import { FormQuestionComponent } from '../../../../core/components/learning-activities/form-question/form-question.component';
import { InteractionSubmitAction } from '../../../../core/enums/interactions.enum';

export const learningActivitiesSectionSlide1 : Slide = {
    name: 'Pregunta de selección múltiple con única respuesta',
    rows: [{
        cols: [{
            type: ComponentType.LearningActivity,
            component: FormQuestionComponent,
            data: {
                statement : 'Este es el enunciado de una actividad de aprendizaje de '+
                'selección múltiple con única respuesta',
                answerOpts: [
                    'Opción 1',
                    'Opción 2',
                    'Opción 3',
                    'Opción 4'
                ],
                correct: [2],
                SCORM: {
                    weight: 1,
                    type: SCORMInteractionType.Choice
                },
                submitBtn: {
                    tag : 'Enviar'
                },
                onSubmit: InteractionSubmitAction.Alert
            }
        }]
    }],
    style: {}
};
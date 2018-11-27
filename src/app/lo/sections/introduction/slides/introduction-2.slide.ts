import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { FormQuestionComponent } from '../../../../core/components/learning-activities/form-question/form-question.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { SCORMInteractionType } from '../../../../core/enums/scorm.enum';
import { InteractionSubmitAction } from '../../../../core/enums/interactions.enum'

export const introductionSectionSlide2 : Slide = {
    name: 'Ejercicio 1',
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
                correct: [1],
                SCORM: {
                    weight: 1,
                    type: SCORMInteractionType.Choice
                },
                submitBtn: {
                    tag : 'Enviar'
                },
                onSubmit: InteractionSubmitAction.GoToPrevious
            }
        }]
    }],
    style: {}
};
import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { FormQuestionComponent } from '../../../../core/components/learning-activities/form-question/form-question.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { SCORMInteractionType } from '../../../../core/enums/scorm.enum';

export const baseSectionSlide1 : Slide = {
    rows: [{
        cols: [{
            type: ComponentType.LearningActivity,
            component: FormQuestionComponent,
            data: {
                statement : 'Este es el enunciado de la primera pregunta',
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
                }
            }
        }, {
            type: ComponentType.LearningActivity,
            component: FormQuestionComponent,
            data: {
                statement : 'Este es el enunciado de la segunda pregunta',
                answerOpts: [
                    'Opción 1',
                    'Opción 2',
                    'Opción 3',
                    'Opción 4'
                ],
                correct: [2, 3],
                SCORM: {
                    weight: 1,
                    type: SCORMInteractionType.Choice
                },
                submitBtn: {
                    tag : 'Enviar'
                }
            }
        }]
    }],
    style: {}
};
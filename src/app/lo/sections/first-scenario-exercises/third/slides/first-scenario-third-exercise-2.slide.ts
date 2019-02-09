import { Slide } from '../../../../../core/interfaces/lo-content.interface';
import { PhysicsFunctionQuestionComponent } from '../../../../../core/components/learning-activities/physics-function-question/physics-function-question.component';
import { ComponentType } from '../../../../../core/enums/component-type.enum';
import { SCORMInteractionType } from '../../../../../core/enums/scorm.enum';
import { InteractionSubmitAction } from '../../../../../core/enums/interactions.enum'
import { ParagraphComponent } from '../../../../../core/components/basic/paragraph/paragraph.component';
import { physicsHelper } from '../../../../helpers/physics.helper';
import { ForceUnits, LengthUnits } from '../../../../../core/enums/units.enum';

export const firstScenarioThirdExerciseSlide2 : Slide = {
    name: 'Escenario 1 - Ejercicio 1',
    rows: [{
        cols: [{
            type: ComponentType.LearningActivity,
            component: PhysicsFunctionQuestionComponent,
            data: {
                variables: [{
                    name: 'adCableTension',
                    tag: 'Tensión en el cable AD',
                    value: 400,
                    unit: ForceUnits.Newton,
                    mutable: false
                },
                {
                    name: 'xDistance',
                    tag: 'distancia OD en el eje X',
                    value: 2,
                    unit: LengthUnits.Meter,
                    mutable: false
                },
                {
                    name: 'yDistance',
                    tag: 'distancia OD en el eje Y',
                    value: 2.5,
                    unit: LengthUnits.Meter,
                    mutable: false
                },
                {
                    name: 'zDistance',
                    tag: 'distancia OA en el eje Z',
                    value: 5,
                    unit: LengthUnits.Meter,
                    mutable: false
                },
                {
                    name: 'obDistance',
                    tag: 'distancia OB en el eje Y',
                    value: 3,
                    unit: LengthUnits.Meter,
                    mutable: true
                }],
                statement : 'Para garantizar la comunicación en toda la colonia se instalo una torre ' +
                'de comunicación localizada en la cima de una loma. Si la tension en el cable AD es' +
                'de %(adCableTension):',
                questions: [{
                    statement: '¿Cuál es la tensión en el cable AB?',
                    validateFn: (response, variables) => {
                        return physicsHelper.scenario[1].exercise[3].getCableTensionAB(
                            parseFloat(response), variables
                        );
                    },
                    options: {
                        type: 'number',
                        placeholder: '14.37',
                        pattern: /\d+(\.\d{1,2})*/
                    }
                },{
                    statement: '¿Cuál es la tensión en el cable AC?',
                    validateFn: (response, variables) => {
                        return physicsHelper.scenario[1].exercise[3].getCableTensionAC(
                            parseFloat(response), variables
                        );
                    },
                    options: {
                        type: 'number',
                        placeholder: '14.37',
                        pattern: /\d+(\.\d{1,2})*/
                    }
                },{
                    statement: '¿Cuál es la reacción vertical en el apoyo B?',
                    validateFn: (response, variables) => {
                        return physicsHelper.scenario[1].exercise[3].getVerticalReactionInB(
                            parseFloat(response), variables
                        );
                    },
                    options: {
                        type: 'number',
                        placeholder: '14.37',
                        pattern: /\d+(\.\d{1,2})*/
                    }
                }],
                SCORM: {
                    weight: 1,
                    type: SCORMInteractionType.FillIn
                },
                submitBtn: {
                    tag : 'Enviar'
                },
                onSubmit: InteractionSubmitAction.Alert
            }
        }]
    }],
    style: {
        padding: '25px'
    }
};
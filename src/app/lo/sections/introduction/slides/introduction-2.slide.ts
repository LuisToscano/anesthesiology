import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { PhysicsFunctionQuestionComponent } from '../../../../core/components/learning-activities/physics-function-question/physics-function-question.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { SCORMInteractionType } from '../../../../core/enums/scorm.enum';
import { InteractionSubmitAction } from '../../../../core/enums/interactions.enum'
import { AccelerationUnits, LengthUnits, MassUnits } from '../../../../core/enums/units.enum';
import { physicsHelper } from '../../../helpers/physics.helper';

export const introductionSectionSlide2 : Slide = {
    name: 'Ejercicio 1',
    rows: [{
        cols: [{
            type: ComponentType.LearningActivity,
            component: PhysicsFunctionQuestionComponent,
            data: {
                variables: [{
                    name: 'hexagonSide',
                    tag: 'Lado plafón hexagonal',
                    value: 1,
                    unit: LengthUnits.Meter,
                    mutable: true
                }, {
                    name: 'hexagonWeight',
                    tag: 'Peso plafón hexagonal',
                    value: 20,
                    unit: MassUnits.Kilogram,
                    mutable: false
                },{
                    name: 'asteroidGravity',
                    tag: 'Gravedad del asteroide',
                    value: 2,
                    unit: AccelerationUnits.MeterPerSecondSquare,
                    mutable: false
                }, {
                    name: 'tieDownDistance',
                    tag: 'Distancia del punto de sujeción',
                    value: 80,
                    unit: LengthUnits.Centimeter,
                    mutable: true
                }],
                statement : 'Cada uno de los plafones hexagonales, cuyo lado mide %(hexagonSide), ' +
                'tiene una masa de %(hexagonWeight). El asteroide tiene una gravedad de %(asteroidGravity).',
                questions: [{
                    statement: 'Cual es la tensión en cada cable del plafón central si el punto de sujeción ' + 
                    'de los cables se encuentra a %(tieDownDistance)?',
                    validateFn: (response, variables) => {
                        return physicsHelper.getRectangularComponentforTension(
                            parseFloat(response),
                            variables.hexagonSide.value,
                            variables.tieDownDistance.value,
                            variables.hexagonWeight.value,
                            variables.asteroidGravity.value
                        );
                    },
                    options: {
                        type: 'number',
                        placeholder: '14.37',
                        pattern: /\d+(\.\d{1,2})*/
                    }
                }, {
                    statement: 'Cuáles son las componentes rectangulares de la tensión TGE de acuerdo ' +
                    'al sistema de coordenadas mostrado?',
                    validateFn: (response, variables) => {
                        return true;
                    },
                    options: {
                        type: 'text',
                        placeholder: '0i+0j+0k',
                        pattern: /\d+(\.\d{1,2})*[i][+-]\d+(\.\d{1,2})*[j][+-]\d+(\.\d{1,2})*[k]/
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
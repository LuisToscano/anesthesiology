import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { PhysicsFunctionQuestionComponent } from '../../../../core/components/learning-activities/physics-function-question/physics-function-question.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { SCORMInteractionType } from '../../../../core/enums/scorm.enum';
import { InteractionSubmitAction } from '../../../../core/enums/interactions.enum'
import { AccelerationUnits, LengthUnits, MassUnits } from '../../../../core/enums/units.enum';
import { truncateDecimal } from '../../../../core/constants/utils.constant';


export const introductionSectionSlide2 : Slide = {
    name: 'Ejercicio 1',
    rows: [{
        cols: [{
            type: ComponentType.LearningActivity,
            component: PhysicsFunctionQuestionComponent,
            data: {
                variables: [{
                    name: 'hexagonSide',
                    value: 1,
                    unit: LengthUnits.Meter,
                    mutable: true
                }, {
                    name: 'hexagonWeight',
                    value: 20,
                    unit: MassUnits.Kilogram,
                    mutable: false
                },{
                    name: 'asteroidGravity',
                    value: 2,
                    unit: AccelerationUnits.MeterPerSecondSquare,
                    mutable: false
                }, {
                    name: 'tieDownDistance',
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
                        let _response = parseFloat(response);
                        let _hexagonSide = variables.hexagonSide.value;
                        let _tieDownDistance = variables.tieDownDistance.value;
                        let _hexagonWeight = variables.hexagonWeight.value;
                        let _asteroidGravity = variables.asteroidGravity.value;
                        let cableLength = Math.sqrt(
                            Math.pow(_hexagonSide * 100, 2) +
                            Math.pow(_tieDownDistance, 2)
                        );
                        let w = _hexagonWeight * _asteroidGravity;
                        let answer = (w * cableLength) / (3 * _tieDownDistance);
                        console.log(_response, truncateDecimal(answer, 2), parseFloat(answer.toFixed(2)));
                        return _response === truncateDecimal(answer, 2) ||
                            _response === parseFloat(answer.toFixed(2));
                    },
                    options: {
                        placeholder: '14.37',
                        maxLength: 5,
                        pattern: /\d+(\.\d{1,2})?/
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
    style: {}
};
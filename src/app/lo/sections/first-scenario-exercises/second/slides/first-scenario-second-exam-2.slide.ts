import { Slide } from '../../../../../core/interfaces/lo-content.interface';
import { PhysicsFunctionQuestionComponent } from '../../../../../core/components/learning-activities/physics-function-question/physics-function-question.component';
import { ComponentType } from '../../../../../core/enums/component-type.enum';
import { SCORMInteractionType } from '../../../../../core/enums/scorm.enum';
import { InteractionSubmitAction } from '../../../../../core/enums/interactions.enum'
import { ParagraphComponent } from '../../../../../core/components/basic/paragraph/paragraph.component';
import { physicsHelper } from '../../../../helpers/physics.helper';
import { AccelerationUnits, ForceUnits, MassUnits, LengthUnits } from '../../../../../core/enums/units.enum';

var statement = 'En la figura se observa la estructura de la granja construida por el polímero xyz, ' +
'muy resistente y super liviano. Ningún elemento de la estructura es continuo y todas las uniones son ' +
'articuladas, para un fácil transporte y armado. La estructura se encuentra simplemente apoyada en un ' +
'único punto (G) y estabilizada por un cable amarrado en K y anclado en L. La granja esta automatizada ' +
'para garantizar las condiciones de humedad, temperatura y luz de las plantas.';

export const firstScenarioSecondExerciseSlide2 : Slide = {
    name: 'Escenario 1 - Ejercicio 1',
    rows: [{
        cols: [{
                type: ComponentType.Basic,
                component: ParagraphComponent,
                data: [{
                    text: statement,
                    args: {}
                }]
            }]
        },{
        cols: [{
            type: ComponentType.LearningActivity,
            component: PhysicsFunctionQuestionComponent,
            data: {
                variables: [{
                    name: 'lampMass',
                    tag: 'Peso de la lámpara',
                    value: 10,
                    unit: MassUnits.Kilogram,
                    mutable: true
                }, {
                    name: 'maxMassBetweenBnC',
                    tag: 'Máxima masa permitida entre B y C',
                    value: 4,
                    unit: MassUnits.Kilogram,
                    mutable: true
                },
                {
                    name: 'asteroidGravity',
                    tag: 'Gravedad del asteroide',
                    value: 10,
                    unit: AccelerationUnits.MeterPerSecondSquare,
                    mutable: false
                },
                {
                    name: 'klCableTension',
                    tag: 'Tensión en el cable KL',
                    value: 109.1,
                    unit: ForceUnits.Newton,
                    mutable: false
                },
                {
                    name: 'jdDistance',
                    tag: 'Distancia entre los puntos J y D',
                    value: 2,
                    unit: LengthUnits.Meter,
                    mutable: true
                },
                {
                    name: 'efDistance',
                    tag: 'Distancia entre los puntos E y F',
                    value: 3,
                    unit: LengthUnits.Meter,
                    mutable: false
                },
                {
                    name: 'abcdeklDistance',
                    tag: 'Distancia entre los puntos AB, BC, CD, DK y KL',
                    value: 2,
                    unit: LengthUnits.Meter,
                    mutable: false
                }],
                statement : 'B y C son los puntos de suministro de agua y A es uno de los dos puntos que ' +
                'sostienen la lampara. Si la masa de la lampara es de %(lampMass) (para repartir en dos) y los ' +
                'máximas masas que pueden haber en un momento dado en B y C es de %(maxMassBetweenBnC). ' +
                'Recordando que la gravedad artificial de %(asteroidGravity) y si la tensión en el cable KL es ' +
                'de %(klCableTension):',
                questions: [{
                    statement: '¿Cuál es el axial en AB?',
                    validateFn: (response, variables) => {
                        return physicsHelper.scenario[1].exercise[2].getABAxial(parseInt(response), variables);
                    },
                    options: {
                        type: 'number',
                        placeholder: '14.37',
                        pattern: /\d+(\.\d{1,2})*/
                    }
                },{
                    statement: '¿Cuál es el axial en GK?',
                    validateFn: (response, variables) => {
                        return physicsHelper.scenario[1].exercise[2].getGKAxial(parseInt(response), variables);
                    },
                    options: {
                        type: 'number',
                        placeholder: '14.37',
                        pattern: /\d+(\.\d{1,2})*/
                    }
                },{
                    statement: '¿Cuál es el axial en IC?',
                    validateFn: (response, variables) => {
                        return physicsHelper.scenario[1].exercise[2].getICAxial(parseInt(response), variables);
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
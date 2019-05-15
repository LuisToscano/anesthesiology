import { Slide } from '../../../../../core/interfaces/lo-content.interface';
import { PhysicsFunctionQuestionComponent } from '../../../../../core/components/learning-activities/physics-function-question/physics-function-question.component';
import { ImgComponent } from '../../../../../core/components/basic/img/img.component';
import { SimpleContainerComponent } from '../../../../../core/components/content-organizers/simple-container/simple-container.component';
import { ComponentType } from '../../../../../core/enums/component-type.enum';
import { InteractionSubmitAction } from '../../../../../core/enums/interactions.enum';
import { SCORMInteractionType } from '../../../../../core/enums/scorm.enum';
import { AccelerationUnits, LengthUnits, MassUnits, ForceUnits } from '../../../../../core/enums/units.enum';
import { physicsHelper } from '../../../../helpers/physics.helper';
import { LOi18n } from '../../../../i18n/lo.i18n';

const staticTxt = LOi18n.sections.scenario[1].exercises[2];

export const firstScenarioSecondExerciseSlide2 : Slide = {
    name: 'Escenario 1 - Ejercicio 2',
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: SimpleContainerComponent,
            data: [{
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ImgComponent,
                        data: {
                            source: 'assets/img/exercise2.png',
                            style: {
                                'max-width': '95%',
                                'margin': '0 auto'
                            }
                        },
                        style: {
                            'display': 'flex',
                            'flex-direction': 'row',
                            'align-items': 'center'
                        },
                        classes: ['space-intro']
                    }]
                }]
            }]
            },
            {
                type: ComponentType.LearningActivity,
                component: PhysicsFunctionQuestionComponent,
                data: {
                    name: staticTxt.name,
                    variables: [{
                        name: 'lampMass',
                        tag: staticTxt.variables.lampMass.tag,
                        value: 10,
                        unit: MassUnits.Kilogram,
                        mutable: true,
                        ref: 'm1',
                        min: 5,
                        max: 30
                    }, {
                        name: 'maxMassBetweenBnC',
                        tag: staticTxt.variables.maxMassBetweenBnC.tag,
                        value: 4,
                        unit: MassUnits.Kilogram,
                        mutable: true,
                        ref: 'm2',
                        min: 2,
                        max: 10
                    },
                    {
                        name: 'asteroidGravity',
                        tag: staticTxt.variables.asteroidGravity.tag,
                        value: 10,
                        unit: AccelerationUnits.MeterPerSecondSquare,
                        mutable: false
                    },
                    {
                        name: 'klCableTension',
                        tag: staticTxt.variables.klCableTension.tag,
                        value: 109.1,
                        unit: ForceUnits.Newton,
                        mutable: false
                    },
                    {
                        name: 'jdDistance',
                        tag: staticTxt.variables.jdDistance.tag,
                        value: 2,
                        unit: LengthUnits.Meter,
                        mutable: false
                    },
                    {
                        name: 'efDistance',
                        tag: staticTxt.variables.efDistance.tag,
                        value: 3,
                        unit: LengthUnits.Meter,
                        mutable: false
                    },
                    {
                        name: 'abcdeklDistance',
                        tag: staticTxt.variables.abcdeklDistance.tag,
                        value: 2,
                        unit: LengthUnits.Meter,
                        mutable: false
                    }],
                    statement : staticTxt.statement,
                    questions: [{
                        statement: staticTxt.questions[1].statement,
                        validateFn: (response, variables) => {
                            return physicsHelper.scenario[1].exercise[2].getABAxial(parseInt(response), variables);
                        },
                        options: {
                            type: 'number',
                            placeholder: '14.37',
                            pattern: /\d+(\.\d{1,2})*/
                        }
                    },{
                        statement: staticTxt.questions[2].statement,
                        validateFn: (response, variables) => {
                            return physicsHelper.scenario[1].exercise[2].getGKAxial(parseInt(response), variables);
                        },
                        options: {
                            type: 'number',
                            placeholder: '14.37',
                            pattern: /\d+(\.\d{1,2})*/
                        }
                    },{
                        statement: staticTxt.questions[3].statement,
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
                        tag : staticTxt.btns.submit.tag
                    },
                    attempts: 3,
                    onSubmit: InteractionSubmitAction.DisplayModal
                },
                style: {
                    padding: '50px'
                }
            }]
        }]
};
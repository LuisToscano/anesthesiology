import { Slide } from '../../../../../core/interfaces/lo-content.interface';
import { PhysicsFunctionQuestionComponent } from '../../../../../core/components/learning-activities/physics-function-question/physics-function-question.component';
import { ImgComponent } from '../../../../../core/components/basic/img/img.component';
import { SimpleContainerComponent } from '../../../../../core/components/content-organizers/simple-container/simple-container.component';
import { ComponentType } from '../../../../../core/enums/component-type.enum';
import { InteractionSubmitAction } from '../../../../../core/enums/interactions.enum';
import { SCORMInteractionType } from '../../../../../core/enums/scorm.enum';
import { AccelerationUnits, LengthUnits, MassUnits } from '../../../../../core/enums/units.enum';
import { physicsHelper } from '../../../../helpers/physics.helper';
import { LOi18n } from '../../../../i18n/lo.i18n';

const staticTxt = LOi18n.sections.scenario[1].exercises[1];

export const firstScenarioFirstExerciseSlide2 : Slide = {
    name: 'Escenario 1 - Ejercicio 1',
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
                            source: 'assets/img/exercise1.png',
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
            },{
                type: ComponentType.LearningActivity,
                component: PhysicsFunctionQuestionComponent,
                data: {
                    name: staticTxt.name,
                    variables: [{
                        ref: 'L',
                        name: 'hexagonSide',
                        tag: staticTxt.variables.hexagonSide.tag,
                        value: 1,
                        unit: LengthUnits.Meter,
                        mutable: true,
                        min: 1,
                        max: 5
                    }, {
                        name: 'hexagonWeight',
                        tag: staticTxt.variables.hexagonWeight.tag,
                        value: 20,
                        unit: MassUnits.Kilogram,
                        mutable: false
                    },{
                        name: 'asteroidGravity',
                        tag: staticTxt.variables.asteroidGravity.tag,
                        value: 2,
                        unit: AccelerationUnits.MeterPerSecondSquare,
                        mutable: false
                    }, {
                        ref: 'h',
                        name: 'tieDownDistance',
                        tag: staticTxt.variables.tieDownDistance.tag,
                        value: 80,
                        unit: LengthUnits.Centimeter,
                        mutable: true,
                        min: 50,
                        max: 100
                    }],
                    statement : staticTxt.statement,
                    questions: [{
                        statement: staticTxt.questions[1].statement,
                        validateFn: (response, variables) => {
                            return physicsHelper.scenario[1].exercise[1].getEachCableTension(
                                parseFloat(response), variables
                            );
                        },
                        options: {
                            type: 'number',
                            placeholder: '0.0',
                            pattern: /\d+(\.\d{1,2})*/
                        }
                    }, {
                        statement: staticTxt.questions[2].statement,
                        validateFn: (response, variables) => {
                            return physicsHelper.scenario[1].exercise[1].getTGETensionRectangularComponent(
                                response, variables
                            );
                        },
                        options: {
                            type: 'text',
                            placeholder: '0i+0j-0k',
                            pattern: /\d+(\.\d{1,2})*[i][+-]\d+(\.\d{1,2})*[j][+-]\d+(\.\d{1,2})*[k]/
                        }
                    }, {
                        statement: staticTxt.questions[3].statement,
                        validateFn: (response, variables) => {
                            return physicsHelper.scenario[1].exercise[1].getTGDTensionRectangularComponent(
                                response, variables
                            );
                        },
                        options: {
                            type: 'text',
                            placeholder: '0i+0j-0k',
                            pattern: /\d+(\.\d{1,2})*[i][+-]\d+(\.\d{1,2})*[j][+-]\d+(\.\d{1,2})*[k]/
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
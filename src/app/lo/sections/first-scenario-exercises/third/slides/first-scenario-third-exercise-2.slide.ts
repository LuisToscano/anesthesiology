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

const staticTxt = LOi18n.sections.scenario[1].exercises[3];

export const firstScenarioThirdExerciseSlide2 : Slide = {
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
                            source: 'assets/img/exercise3.png',
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
                    name: 'adCableTension',
                    tag: staticTxt.variables.adCableTension.tag,
                    value: 400,
                    unit: ForceUnits.Newton,
                    mutable: false
                },
                {
                    name: 'xDistance',
                    tag: staticTxt.variables.xDistance.tag,
                    value: 2,
                    unit: LengthUnits.Meter,
                    mutable: false
                },
                {
                    name: 'yDistance',
                    tag: staticTxt.variables.yDistance.tag,
                    value: 2.5,
                    unit: LengthUnits.Meter,
                    mutable: false
                },
                {
                    name: 'zDistance',
                    tag: staticTxt.variables.zDistance.tag,
                    value: 5,
                    unit: LengthUnits.Meter,
                    mutable: false
                },
                {
                    name: 'obDistance',
                    tag: staticTxt.variables.obDistance.tag,
                    value: 3,
                    unit: LengthUnits.Meter,
                    mutable: true,
                    ref: 'd',
                    min: 1,
                    max: 8
                }],
                statement : staticTxt.statement,
                questions: [{
                    statement: staticTxt.questions[1].tag,
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
                    statement: staticTxt.questions[2].tag,
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
                    statement: staticTxt.questions[3].tag,
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
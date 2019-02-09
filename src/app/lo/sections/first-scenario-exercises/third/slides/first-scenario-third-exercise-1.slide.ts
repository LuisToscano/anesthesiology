import { Slide } from '../../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../../core/components/basic/paragraph/paragraph.component';
import { ButtonComponent } from '../../../../../core/components/basic/button/button.component';
import { ComponentType } from '../../../../../core/enums/component-type.enum';
import { ElementAction } from '../../../../../core/enums/element-action.enum';

var statement = 'Este es el enunciado del tercer ejercicio';

export const firstScenarioThirdExerciseSlide1 : Slide = {
    name: 'Escenario 1 - Ejercicio 3 - Intro',
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: statement,
                args: {}
            }]
        }]
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ButtonComponent,
            actions: [ElementAction.GoToSlide],
            data: {
                text: 'Continuar',
                target: 1,
                style: {
                    background: 'lightgray'
                }
            }
        }]
    }]
};
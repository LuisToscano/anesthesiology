import { Slide } from '../../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../../core/components/basic/paragraph/paragraph.component';
import { ButtonComponent } from '../../../../../core/components/basic/button/button.component';
import { ComponentType } from '../../../../../core/enums/component-type.enum';
import { ElementAction } from '../../../../../core/enums/element-action.enum';

var statement = 'En las primeras colonias, los plafones, con autonomía de vuelo, se sostenían del domo ' +
'geodésico exterior mediante tres cables unidos a tres puntos de la estructura. Pero, posteriormente se ' +
'decidió,por velocidad de instalación, cambiar el sistema de sujeción, conectando cada plafón a un punto ' +
'de la estructura. Los plafones una vez en contacto con los vecinos se unían automáticamente.'

export const firstScenarioFirstExerciseSlide1 : Slide = {
    name: 'Escenario 1 - Ejercicio 1 - Intro',
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
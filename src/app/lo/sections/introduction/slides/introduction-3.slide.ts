import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent  } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ElementAction } from '../../../../core/enums/element-action.enum';
import { ButtonComponent  } from '../../../../core/components/basic/button/button.component';

var statement = 'En una de las búsquedas de asteroides colonizables, los exploradores encontraron el ' +
'asteroide XXC1 y se empezó la construcción de la primera colonia en el asteroide.';

export const introductionSectionSlide3 : Slide = {
    name: 'Introducción - 3',
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
                target: 3,
                style: {
                    background: 'lightgray'
                }
            }
        }]
    }],
    style: {
        padding: '25px'
    }
};
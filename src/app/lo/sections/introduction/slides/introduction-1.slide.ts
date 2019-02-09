import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ButtonComponent } from '../../../../core/components/basic/button/button.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ElementAction } from '../../../../core/enums/element-action.enum';

export const introductionSectionSlide1 : Slide = {
    name: 'Introducción - 1',
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: 'Colonización en Asteroide XXC1',
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
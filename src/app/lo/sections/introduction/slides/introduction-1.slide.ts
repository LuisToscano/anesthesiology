import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ButtonComponent } from '../../../../core/components/basic/button/button.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ElementAction } from '../../../../core/enums/element-action.enum';

export const introductionSectionSlide1 : Slide = {
    name: 'Escenario 1',
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: 'Este es el primer escenario',
                args: {}
            }]
        }]
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ButtonComponent,
            actions: [ElementAction.GoToSlide, ElementAction.ActiveIfSlideInteractionsDone],
            data: {
                text: 'Primer ejercicio',
                target: 1
            }
        }]
    }],
    style: {}
};
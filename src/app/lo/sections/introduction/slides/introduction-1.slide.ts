import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';

export const introductionSectionSlide1 : Slide = {
    name: 'Escenario 1',
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: 'Esta es la primera diapositiva',
                args: {}
            }]
        }]
    }],
    style: {}
};
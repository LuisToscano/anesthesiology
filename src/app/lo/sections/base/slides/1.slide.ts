import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';

export const baseSectionSlide1 : Slide = {
    rows: [{
        cols: [{
            component: ParagraphComponent,
            data: [{
                text: 'Hola mundo! Este es el primer slide de la primera seccion',
                args: {}
            }]
        }]
    }],
    style: {}
};
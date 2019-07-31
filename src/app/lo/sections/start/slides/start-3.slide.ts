import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';

const tags = LOi18n.sections.start.slides[2];

export const startSectionSlide3 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: 'Sección Inicio Diapositiva 3',
                args: {}
            }]
        }]
    }]
};
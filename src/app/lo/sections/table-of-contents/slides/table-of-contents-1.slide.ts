import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ImgComponent } from '../../../../core/components/basic/img/img.component';

const tags = LOi18n.sections.tableOfContents.slides[0];

export const tableOfContentsSectionSlide1 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ImgComponent,
            data: {
                source: './assets/img/tabla_contenido.png',
                style: {
                    maxWidth: '100%'
                }
            },
            classes: ['center-img']
        }]
    }],
    classes: ['primary-section']
};
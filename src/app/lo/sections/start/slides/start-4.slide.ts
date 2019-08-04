import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ImgComponent } from '../../../../core/components/basic/img/img.component';

const tags = LOi18n.sections.start.slides[3];

export const startSectionSlide4 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ImgComponent,
            data: {
                source: './assets/img/personaje2.png',
                style: {
                    maxWidth: '100%',
                    height: '500px'
                }
            },
            classes: ['center-img']
        },{
            type: ComponentType.Basic,
            component: ImgComponent,
            data: {
                source: './assets/img/bocadillo_carpeta.png',
                style: {
                    maxWidth: '100%',
                    height: '500px'
                }
            },
            classes: ['center-img']
        }]
    }],
    classes: ['primary-section']
};
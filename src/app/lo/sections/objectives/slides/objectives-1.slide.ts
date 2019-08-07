import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ImgComponent } from '../../../../core/components/basic/img/img.component';

const tags = LOi18n.sections.objectives.slides[0];

export const objectivesSectionSlide1 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ImgComponent,
            data: {
                source: './assets/img/objetivo_general.png',
                style: {
                    maxWidth: '100%',
                    marginTop: '53px'
                }
            },
            classes: ['center-img']
        }]
    }],
    classes: ['primary-section']
};
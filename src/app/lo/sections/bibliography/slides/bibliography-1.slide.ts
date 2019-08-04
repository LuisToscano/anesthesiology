import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ListComponent } from '../../../../core/components/basic/list/list.component';

const tags = LOi18n.sections.bibliography.slides[0];

export const bibliographySectionSlide1 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.paragraphs[0].text,
                args: {}
            },{
                text: tags.paragraphs[0].text,
                args: {}
            }]
        }],
        flex: 0
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ListComponent,
            data: {
                elements: tags.list,
                numbered: false
            }
        }],
        flex: 0
    }],
    classes: ['secondary-section']
};
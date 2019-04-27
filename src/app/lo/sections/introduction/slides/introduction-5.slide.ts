import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { IntroSlideShowComponent } from '../../../../core/components/content-organizers/intro-slideshow/intro-slideshow.component';
import { VoidComponent } from '../../../../core/components/basic/void/void.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { LOi18n } from '../../../i18n/lo.i18n';

const staticTxt = LOi18n.sections.introduction.slides[5];

export const introductionSectionSlide5 : Slide = {
    name: 'Introducción - 5',
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: IntroSlideShowComponent,
            data: [{
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: staticTxt.intro
                        }],
                        style: {
                            'flex-direction': 'column'
                        }
                    }]
                }]
            }],
            classes: ['space-intro'],
            flex: 3
        },{
            type: ComponentType.Basic,
            component: VoidComponent,
            data: {},
            classes: ['img-intro'],
            style: {
                background: 'url("assets/img/dome-3.jpg") no-repeat'
            },
            flex: 2
        }]
    }]
};
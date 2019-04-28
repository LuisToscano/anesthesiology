import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ButtonComponent } from '../../../../core/components/basic/button/button.component';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { IntroSlideShowComponent } from '../../../../core/components/content-organizers/intro-slideshow/intro-slideshow.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ElementAction } from '../../../../core/enums/element-action.enum';
import { VoidComponent } from '../../../../core/components/basic/void/void.component';
import { LOi18n } from '../../../i18n/lo.i18n';

const staticTxt = LOi18n.sections.introduction.slides[6];

export const introductionSectionSlide6 : Slide = {
    name: 'Introducción - 6',
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: IntroSlideShowComponent,
            data: [{
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: VoidComponent,
                        data: {}
                    }]
                },{
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
                }, {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ButtonComponent,
                        data: {
                            text: 'Regresar',
                            target: 'scenarios'
                        },
                        actions: [ElementAction.GoToSection],
                        classes: ['return-to-menu'],
                        style: {
                            'flex-direction': 'column'
                        }
                    }]
                },{
                    cols: [{
                        type: ComponentType.Basic,
                        component: VoidComponent,
                        data: {}
                    }]
                }]
            }],
            classes: ['space-intro', 'no-img'],
            flex: 3
        }]
    }]
};
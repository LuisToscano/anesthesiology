import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { VoidComponent } from '../../../../core/components/basic/void/void.component';
import { SimpleContainerComponent } from '../../../../core/components/content-organizers/simple-container/simple-container.component';
import { ImgComponent } from '../../../../core/components/basic/img/img.component';

const tags = LOi18n.sections.credits.slides[0];

export const creditsSectionSlide1 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.author.tag,
                args: {}
            }],
            classes: ['subheader'],
            style: {
                paddingLeft: '20px'
            }
        }, {
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.DNIA,
                args: {}
            }],
            classes: ['subheader']
        }],
        flex: 1
    },{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: SimpleContainerComponent,
            data: [{
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ImgComponent,
                        data: {
                            source: './assets/img/autor.png',
                            style: {
                                width: '100px',
                                height: '100px',
                                margin: '0 auto'
                            }
                        },
                        flex: 2
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: tags.author.name
                        }, {
                            text: tags.author.credentials
                        }],
                        flex: 5,
                        style: {
                            marginLeft: '5px',
                            paddingRight: '15px'
                        },
                        classes: ['author-box']
                    }],
                    style: {
                        padding: '10px 0',
                        background: '#6B8475'
                    }
                }]
            }],
            style: {
                padding: '0 15px'
            }
        }, {
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.production.tag,
                args: {}
            }],
            classes: ['subheader-2']
        }],
        flex: 5
    },{
        cols: [{
            type: ComponentType.Basic,
            component: VoidComponent,
            data: {}
        }],
        flex: 2
    }]
};
import { startSection } from "./sections/start/start.section";
import { ElementAction } from "../core/enums/element-action.enum";
import { objectivesSection } from "./sections/objectives/objectives.section";
import { introductionSection } from "./sections/introduction/introduction.section";
import { tableOfContentsSection } from "./sections/table-of-contents/table-of-contents.section";
import { bibliographySection } from "./sections/bibliography/bibliography.section";
import { techRequirementsSection } from "./sections/techRequirements/techRequirements.section";
import { creditsSection } from "./sections/credits/credits.section";
import { LOi18n } from "./i18n/lo.i18n";
import { ParagraphArgumentType } from "../core/components/basic/paragraph/paragraph.enum";
import { SimpleContainerComponent } from "../core/components/content-organizers/simple-container/simple-container.component";
import { ComponentType } from "../core/enums/component-type.enum";
import { ParagraphComponent } from "../core/components/basic/paragraph/paragraph.component";
import { TitleComponent } from "../core/components/basic/title/title.component";
import { ImgComponent } from "../core/components/basic/img/img.component";
import { ListComponent } from "../core/components/basic/list/list.component";
import { ButtonComponent } from "../core/components/basic/button/button.component";
import { VoidComponent } from "../core/components/basic/void/void.component";

export const LOExtras : LOExtrasContent = {
    menuBars: {
        top: [{
            text: startSection.name,
            icon: 'home',
            actions: [
                ElementAction.GoToSection,
                ElementAction.ActiveIfCurrentSection
            ],
            data: {
                target: startSection.id
            }
        },
        {
            text: objectivesSection.name,
            icon: 'crosshairs',
            actions: [
                ElementAction.GoToSection,
                ElementAction.ActiveIfCurrentSection
            ],
            data: {
                target: objectivesSection.id
            }
        },
        {
            text: introductionSection.name,
            icon: 'power-off',
            actions: [
                ElementAction.GoToSection,
                ElementAction.ActiveIfCurrentSection
            ],
            data: {
                target: introductionSection.id
            }
        },
        {
            text: tableOfContentsSection.name,
            icon: 'table',
            actions: [
                ElementAction.GoToSection,
                ElementAction.ActiveIfCurrentSection
            ],
            data: {
                target: tableOfContentsSection.id
            }
        }],
    bottom: [{
            text: bibliographySection.name,
            actions: [
                ElementAction.GoToSection,
                ElementAction.ActiveIfCurrentSection
            ],
            data: {
                target: bibliographySection.id
            }
        },
        {
            text: LOi18n.layout.navBars.bottom.items.navigationGuide.tag,
            actions: [ ElementAction.DisplayModal ],
            data: {
                component: SimpleContainerComponent,
                data: [{
                    rows: [{
                        cols: [{
                            type: ComponentType.Basic,
                            component: TitleComponent,
                            data: {
                                title: LOi18n.modals.navigationGuide.title,
                                iconClass: 'sitemap'
                            }
                        }],
                        style: {
                            padding: '10px 0 20px 10px',
                            borderBottom: 'solid 1px #D3D3D3'
                        },
                        flex: 1
                    },
                    {
                        cols: [{
                            type: ComponentType.Basic,
                            component: ImgComponent,
                            data: {
                                source: './assets/img/ayuda.jpg',
                                style: {
                                    maxWidth: '100%'
                                }
                            }
                        }, {
                            type: ComponentType.Basic,
                            component: ListComponent,
                            data: {
                                elements: LOi18n.modals.navigationGuide.list,
                                numbered: true
                            }
                        }],
                        style: {
                            padding: '20px 0',
                            borderBottom: 'solid 1px #D3D3D3'
                        },
                        flex: 2
                    },
                    {
                        cols: [{
                            type: ComponentType.Basic,
                            component: ButtonComponent,
                            actions: [ ElementAction.HideModal ],
                            data: {
                                text: LOi18n.modals.navigationGuide.btns.close.tag
                            },
                            flex: 1
                        }],
                        style: {
                            padding: '20px 10px 0 0'
                        },
                        classes: ['btn-set'],
                        flex: 1
                    }]
                }]
            }
        },
        {
            text: techRequirementsSection.name,
            actions: [
                ElementAction.GoToSection,
                ElementAction.ActiveIfCurrentSection
            ],
            data: {
                target: techRequirementsSection.id
            }
        },
        {
            text: creditsSection.name,
            actions: [
                ElementAction.GoToSection,
                ElementAction.ActiveIfCurrentSection
            ],
            data: {
                target: creditsSection.id
            }
        }]
    },
    copyright: [{
        text: LOi18n.layout.copyright.p[0].text,
        args: {
            copyright: {
                type: ParagraphArgumentType.Link,
                data: {
                    innerText: LOi18n.layout.copyright.p[0].link,
                    href: 'https://creativecommons.org/licenses/by-nc-nd/2.5/co/deed.es_ES'
                }
            }
        }
    },{
        text: LOi18n.layout.copyright.p[1].text,
        args: {}
    }]
};

interface LOExtrasContent{
    menuBars : {
        top ?: Array<any>,
        bottom ?: Array<any>
    },
    copyright: any
    footer ?: Array<any>,
    helpBtns ?: Array<any>
}


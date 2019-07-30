import { startSection } from "./sections/start/start.section";
import { ElementAction } from "../core/enums/element-action.enum";
import { objectivesSection } from "./sections/objectives/objectives.section";
import { introductionSection } from "./sections/introduction/introduction.section";
import { tableOfContentsSection } from "./sections/table-of-contents/table-of-contents.section";

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
                target: objectivesSection.id,
                icon: 'hola'
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
                target: introductionSection.id,
                icon: 'hola'
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
                target: tableOfContentsSection.id,
                icon: 'hola'
            }
        }]
    }
};

interface LOExtrasContent{
    menuBars : {
        top ?: Array<any>,
        bottom ?: Array<any>
    },
    footer ?: Array<any>,
    helpBtns ?: Array<any>
}


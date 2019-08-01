import { startSection } from "./sections/start/start.section";
import { ElementAction } from "../core/enums/element-action.enum";
import { objectivesSection } from "./sections/objectives/objectives.section";
import { introductionSection } from "./sections/introduction/introduction.section";
import { tableOfContentsSection } from "./sections/table-of-contents/table-of-contents.section";
import { bibliographySection } from "./sections/bibliography/bibliography.section";
import { techRequirementsSection } from "./sections/techRequirements/techRequirements.section";
import { creditsSection } from "./sections/credits/credits.section";
import { LOi18n } from "./i18n/lo.i18n";

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
            actions: [],
            data: {}
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


import { basicComponentsSection } from './sections/basic-components/basic-components.section';
import { learningActivitiesSection } from './sections/learning-activities/learning-activities.section';
import { contentOrganizersSection } from './sections/content-organizers/content-organizers.section'
import { MenuBarAction } from '../core/enums/lo-extras.enum';
import { LOHelper } from './lo.helper';

let footer = 'Este es el texto que será utilizado en el pie de página de este demo.';

export const LOExtras : LOExtrasContent = {
    menuBars: {
        top: [
            LOHelper.createMenuBarAction(basicComponentsSection, MenuBarAction.GoToSection),
            LOHelper.createMenuBarAction(learningActivitiesSection, MenuBarAction.GoToSection),
            LOHelper.createMenuBarAction(contentOrganizersSection, MenuBarAction.GoToSection)
        ]
    },
    footer: [{
        text: footer,
        args: {}
    }]
};

interface LOExtrasContent{
    menuBars : {
        top ?: Array<any>,
        bottom ?: Array<any>
    },
    footer ?: Array<any>
}


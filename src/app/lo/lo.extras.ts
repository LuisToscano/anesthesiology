/*import { basicComponentsSection } from './sections/basic-components/basic-components.section';
import { MenuBarAction } from '../core/enums/lo-extras.enum';
import { LOHelper } from './lo.helper';*/

export const LOExtras : LOExtrasContent = {
    menuBars: {
        //LOHelper.createMenuBarAction(basicComponentsSection, MenuBarAction.GoToSection)
        top: []
    },
    footer: [{
        text: '',
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


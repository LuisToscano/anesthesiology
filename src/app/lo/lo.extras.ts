/*import { basicComponentsSection } from './sections/basic-components/basic-components.section';
import { ElementAction } from '../core/enums/lo-extras.enum';
import { LOHelper } from './lo.helper';*/

export const LOExtras : LOExtrasContent = {
    menuBars: {
        //LOHelper.createElementAction(basicComponentsSection, ElementAction.GoToSection)
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


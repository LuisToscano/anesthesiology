import { basicComponentsSection } from './sections/basic-components/basic-components';
import { MenuBarAction } from '../core/enums/lo-extras.enum';
import { LOHelper } from './lo.helper';

export const LOExtras : LOExtrasContent = {
    menuBars: {
        top: [
            LOHelper.createMenuBarAction(basicComponentsSection, MenuBarAction.GoToSection)
        ]
    }
};

interface LOExtrasContent{
    menuBars : {
        top ?: Array<any>,
        bottom ?: Array<any>
    }
}


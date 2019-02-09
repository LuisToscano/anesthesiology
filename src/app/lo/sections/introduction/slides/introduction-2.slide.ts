import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent  } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ElementAction } from '../../../../core/enums/element-action.enum';
import { ButtonComponent  } from '../../../../core/components/basic/button/button.component';

var statement = 'En un futuro no muy lejano, por la falta de recursos naturales y la contaminación ' +
'del aire, suelo y agua del planeta tierra, se establecieron colonias de seres humanos ' +
'en diferentes asteroides.';

export const introductionSectionSlide2 : Slide = {
    name: 'Introducción - 2',
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: statement,
                args: {}
            }]
        }]
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ButtonComponent,
            actions: [ElementAction.GoToSlide],
            data: {
                text: 'Continuar',
                target: 2,
                style: {
                    background: 'lightgray'
                }
            }
        }]
    }],
    style: {
        padding: '25px'
    }
};
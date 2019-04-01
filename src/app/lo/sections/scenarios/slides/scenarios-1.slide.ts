import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ButtonComponent } from '../../../../core/components/basic/button/button.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ElementAction } from '../../../../core/enums/element-action.enum';
import { ParagraphClass, ParagraphArgumentType } from '../../../../core/components/basic/paragraph/paragraph.enum';

var statement = 'Una vez instalado el domo, empieza el proceso de colonización del planeta, en dos sectores ' +
'donde la superficie del planeta era relativamente plana. En el primer sector estaban las grandes ' +
'construcciones para las colonias y en el segundo sector las grandes granjas para garantizar la ' +
'seguridad alimentaria. En el interior del domo se mantiene una gravedad artificial de 10m/s2.';

export const scenariosSectionSlide1 : Slide = {
    name: 'Starting Colonization',
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
            actions: [ElementAction.GoToSection, ElementAction.ActiveIfSectionInteractionsDone],
            data: {
                text: 'Presentación',
                target: 'intro'
            }
        }]
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ButtonComponent,
            actions: [ElementAction.GoToSection, ElementAction.ActiveIfSectionInteractionsDone],
            data: {
                text: 'Primer ejercicio',
                target: 'scene1exercise1'
            }
        }]
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ButtonComponent,
            actions: [ElementAction.GoToSection, ElementAction.ActiveIfSectionInteractionsDone],
            data: {
                text: 'Segundo ejercicio',
                target: 'scene1exercise2'
            }
        }]
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ButtonComponent,
            actions: [ElementAction.GoToSection, ElementAction.ActiveIfSectionInteractionsDone],
            data: {
                text: 'Tercer ejercicio',
                target: 'scene1exercise3'
            }
        }]
    }],
    style: {}
};
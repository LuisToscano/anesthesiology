import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent  } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ElementAction } from '../../../../core/enums/element-action.enum';
import { ButtonComponent  } from '../../../../core/components/basic/button/button.component';
import { ParagraphArgumentType, ParagraphClass } from '../../../../core/components/basic/paragraph/paragraph.enum';

var statement = 'El primer paso, fue la construcción de un domo, bajo el cual se mantendría ' +
'un ambiente apto para la vida sobre la superficie del asteroide. El domo, estaba formado de plafones ' +
'hexagonales, unidos entre sí mediante juntas selladas para garantizar la atmósfera interna. Adicionalmente, ' +
'estos plafones serían los responsables de manejar las condiciones de luz de la colonia. Para sostener ' +
'cada plafón , es decir el domo, se utilizaría una estructura de barras que unidas entre sí, conformarían ' +
'un domo geodésico externo';

var statementcont = 'Una vez instalado el domo, empieza el proceso de colonización del planeta, en dos sectores donde la' +
'superficie del planeta era relativamente plana. En el primer sector estaban las grandes' +
'construcciones para las colonias y en el segundo sector las grandes granjas para garantizar la' +
'seguridad alimentaria. En el interior del domo se mantiene una gravedad artificial de %(gravity) 10m/s2.';

export const introductionSectionSlide4 : Slide = {
    name: 'Introducción - 4',
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
            component: ParagraphComponent,
            data: [{
                text: statementcont,
                args: {
                    gravity: {
                        type: ParagraphArgumentType.Class,
                        data: ParagraphClass.Bold
                    }
                }
            }]
        }]
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ButtonComponent,
            actions: [ElementAction.GoToSection],
            data: {
                text: 'Continuar',
                target: 'scenarios',
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
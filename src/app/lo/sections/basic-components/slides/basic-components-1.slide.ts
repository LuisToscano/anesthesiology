import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent, ParagraphArgumentType, ParagraphClass } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';

let myParagraph = 'Este es un ejemplo del componente básico párrafo. Este componente permite agregar ' +
'un texto contenido en una etiqueta html P, igualmente, a través del uso de un formato particular, ' +
'es posible añadir características especiales a un fragmento de texto, como %(link), o estilos de %(bold), ' +
'%(italic), o %(both).';

export const baseComponentsSectionSlide1 : Slide = {
    name: 'Párrafo',
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: myParagraph,
                args: {
                    link: {
                        type: ParagraphArgumentType.Link,
                        data: {
                            innerText: 'enlaces a URLs',
                            href: 'https://campus.virtual.unal.edu.co/'
                        }
                    },
                    bold: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: 'negrilla',
                            class: ParagraphClass.Bold
                        }
                    },
                    italic: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: 'cursiva',
                            class: ParagraphClass.Italic
                        }
                    },
                    both: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: 'una combinación de estas',
                            class: [ParagraphClass.Bold, ParagraphClass.Italic]
                        }
                    }
                }
            }]
        }]
    }],
    style: {}
};
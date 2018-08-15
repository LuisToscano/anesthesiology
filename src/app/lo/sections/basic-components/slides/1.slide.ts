import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent, ParagraphArgumentType, ParagraphClass } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';

let myParagraph = 'Este es un ejemplo del componente básico párrafo. Este componente permite agregar ' +
'un texto contenido en una etiqueta html P, igualmente, a través del uso de un formato particular, ' +
'es posible añadir características especiales a un fragmento de texto, como %(link), o estilos de %(bold), ' +
'%(italic), o %(both).';

export const baseSectionSlide1 : Slide = {
    name: 'Párrafo',
    rows: [{
        cols: [{
            type: ComponentType.LearningActivity,
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

/*
[{
            type: ComponentType.LearningActivity,
            component: FormQuestionComponent,
            data: {
                statement : 'Este es el enunciado de la primera pregunta',
                answerOpts: [
                    'Opción 1',
                    'Opción 2',
                    'Opción 3',
                    'Opción 4'
                ],
                correct: [2],
                SCORM: {
                    weight: 1,
                    type: SCORMInteractionType.Choice
                },
                submitBtn: {
                    tag : 'Enviar'
                }
            }
        }, {
            type: ComponentType.LearningActivity,
            component: FormQuestionComponent,
            data: {
                statement : 'Este es el enunciado de la segunda pregunta',
                answerOpts: [
                    'Opción 1',
                    'Opción 2',
                    'Opción 3',
                    'Opción 4'
                ],
                correct: [2, 3],
                SCORM: {
                    weight: 1,
                    type: SCORMInteractionType.Choice
                },
                submitBtn: {
                    tag : 'Enviar'
                }
            }
        }]
*/
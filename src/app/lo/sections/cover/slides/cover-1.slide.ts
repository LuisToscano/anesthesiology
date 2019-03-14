import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { VoidComponent } from '../../../../core/components/basic/void/void.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { SimpleContainerComponent } from '../../../../core/components/content-organizers/simple-container/simple-container.component';

export const coverSectionSlide1 : Slide = {
    name: 'Cover',
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: SimpleContainerComponent,
            data: [{
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: VoidComponent
                    }],
                    flex: 2
                },{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Ejercicios de Aplicación',
                            args: {}
                        }],
                        style: {
                            'align-items': 'flex-end'
                        }
                    }],
                    flex: 2,
                    classes: ['main-title']
                },{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'FACULTAD DE INGENIERÍA',
                            args: {}
                        },{
                            text: 'CURSO DE ESTÁTICA',
                            args: {}
                        }]
                    }],
                    flex: 2,
                    classes: ['subtitle']
                }]
            }],
            classes: ['cover']
        }],
        flex: 4,
        style: {
            padding: '0 100px'
        }
    },{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: 'Portada',
                args: {}
            }]
        }],
        flex: 1,
        style: {
            background: 'black'
        }
    }]
};
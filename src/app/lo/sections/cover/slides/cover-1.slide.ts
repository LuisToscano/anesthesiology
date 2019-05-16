import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ImgComponent } from '../../../../core/components/basic/img/img.component';
import { ButtonComponent } from '../../../../core/components/basic/button/button.component';
import { VoidComponent } from '../../../../core/components/basic/void/void.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ElementAction } from '../../../../core/enums/element-action.enum';
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
                    }, {
                        type: ComponentType.Basic,
                        component: ButtonComponent,
                        data: {
                            text: 'Iniciar',
                            target: 'scenarios'
                        },
                        actions: [ElementAction.GoToSection],
                        classes: ['init-btn-container']
                    }],
                    flex: 2,
                    classes: ['subtitle']
                }]
            }],
            classes: ['cover-simple-container']
        }],
        flex: 5,
        style: {
            padding: '0 100px'
        }
    },{
        cols: [{
            type: ComponentType.Basic,
            component: VoidComponent,
            data: {},
            flex: 3
        }],
        flex: 1
    }]
};


/*
[{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: 'Dirección Nacional de Innovación Académica',
                args: {}
            }, {
                text: 'Vicerrectoría Académica',
                args: {}
            }],
            classes: ['entity-in-charge'],
            flex: 3
        }, {
            type: ComponentType.Basic,
            component: VoidComponent,
            data: null,
            flex: 1
        }, {
            type: ComponentType.Basic,
            component: ImgComponent,
            data: {
                source: './assets/img/logo_unal.png',
                style: {
                    'max-height': '100%',
                    'max-width': '100%'
                } 
            }
        }]
*/
/*import { basicComponentsSection } from './sections/basic-components/basic-components.section';
import { ElementAction } from '../core/enums/lo-extras.enum';
import { LOHelper } from './lo.helper';*/

import { TabOrganizerComponent } from '../core/components/content-organizers/tab-organizer/tab-organizer.component';
import { ParagraphComponent } from '../core/components/basic/paragraph/paragraph.component';
import { ComponentType } from '../core/enums/component-type.enum';
import { ParagraphArgumentType } from '../core/components/basic/paragraph/paragraph.enum';

export const LOExtras : LOExtrasContent = {
    menuBars: {
        //LOHelper.createElementAction(basicComponentsSection, ElementAction.GoToSection)
        top: []
    },
    footer: [{
        text: '',
        args: {}
    }],
    helpBtns: [{
        tag: 'Créditos',
        icon: 'users',
        action: 'modal',
        data: {
            component: TabOrganizerComponent,
            data: [{
                name: 'Profesionales',
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: '%(name)',
                            args: {
                                name: {
                                    type: ParagraphArgumentType.Class,
                                    data: {
                                        innerText: 'Óscar Germán Duarte Velasco',
                                        class: 'credits-professional'
                                    }
                                }
                            }
                        }]
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Director Dirección Nacional de Innovación Académica',
                            args: {}
                        }]
                    }]
                }, {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: '%(name)',
                            args: {
                                name: {
                                    type: ParagraphArgumentType.Class,
                                    data: {
                                        innerText: 'Margie Nohemy Jessup Cáceres',
                                        class: 'credits-professional'
                                    }
                                }
                            }
                        }]
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Coordinadora del Proyecto 256',
                            args: {}
                        }]
                    }]
                }, {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: '%(name)',
                            args: {
                                name: {
                                    type: ParagraphArgumentType.Class,
                                    data: {
                                        innerText: 'Caori Patricia Takeuchi Pam',
                                        class: 'credits-professional'
                                    }
                                }
                            }
                        }]
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Experta temática',
                            args: {}
                        }]
                    }]
                }, {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: '%(name)',
                            args: {
                                name: {
                                    type: ParagraphArgumentType.Class,
                                    data: {
                                        innerText: 'Luis Gabriel Toscano Rodríguez',
                                        class: 'credits-professional'
                                    }
                                }
                            }
                        }]
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Desarrollador / Maestrante de Apoyo',
                            args: {}
                        }]
                    }]
                }, {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: '%(name)',
                            args: {
                                name: {
                                    type: ParagraphArgumentType.Class,
                                    data: {
                                        innerText: 'Yeny Amalia Correales Martínez',
                                        class: 'credits-professional'
                                    }
                                }
                            }
                        }]
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Adecuadora Pedagógica',
                            args: {}
                        }]
                    }]
                }, {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: '%(name)',
                            args: {
                                name: {
                                    type: ParagraphArgumentType.Class,
                                    data: {
                                        innerText: 'Andrés Felipe Jaimes Sánchez',
                                        class: 'credits-professional'
                                    }
                                }
                            }
                        }]
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Edición de Imágenes',
                            args: {}
                        }]
                    }]
                }]
            }, {
                name: 'Imágenes',
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Las imágenes utilizadas en este objeto fueron obtenidas de los siguientes enlaces:',
                            args: {}
                        }]
                    }]
                }]
            }]
        }
    }, {
        tag: 'Ayuda',
        icon: 'question'
    }]
};

interface LOExtrasContent{
    menuBars : {
        top ?: Array<any>,
        bottom ?: Array<any>
    },
    footer ?: Array<any>,
    helpBtns ?: Array<any>
}


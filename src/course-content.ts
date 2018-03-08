import { ParagraphComponent } from './app/components/basic/paragraph/paragraph.component';
import * as _ from "lodash";

const sections = {
    init: {
        id: 'init',
        name: 'Inicio'
    },
    objectives: {
        id: 'objectives',
        name: 'Objetivos'
    },
    introduction: {
        id: 'intro',
        name: 'Introducción'
    },
    contentTable: {
        id: 'table',
        name: 'Tabla de Contenido'
    },
    bibliography: {
        id: 'biblio',
        name: 'Bibliografía'
    },
    requirements: {
        id: 'requirements',
        name: 'Requerimientos técnicos'
    },
    credits: {
        id: 'credits',
        name: 'Créditos'
    },
    navigationGuide: {
        id: 'navGuide',
        name: 'Guia de Navegación'
    }
};

export const contentConstants = {
    actions: {
        goToSection: 'goToSection',
        popup: 'popup'
    }
};

export const courseContent : Array<Sections> = [{
    id: sections.init.id,
    name: sections.init.name,
    slides: [{
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el primer slide de la primera seccion',
                    args: {}
                }]
            }]
        }],
        style: {
            background: 'url("/assets/img/fondo-general.png")'
        }
    }]
},
{
    id: sections.objectives.id,
    name: sections.objectives.name,
    slides: [{
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el primer slide de la segunda seccion',
                    args: {}
                }]
            }]
        }],
        style: {
            background: 'url("/assets/img/fondo-general.png")'
        }
    }]
},
{
    id: sections.introduction.id,
    name: sections.introduction.name,
    slides: [{
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el primer slide de la tercera seccion',
                    args: {}
                }]
            }]
        }],
        style: {
            background: 'url("/assets/img/fondo-general.png")'
        }
    }]
},
{
    id: sections.contentTable.id,
    name: sections.contentTable.name,
    slides: [{
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el primer slide de la cuarta seccion',
                    args: {}
                }]
            }]
        }],
        style: {
            background: 'url("/assets/img/fondo-general.png")'
        }
    }]
},
{
    id: sections.bibliography.id,
    name: sections.bibliography.name,
    icon: 'fa-book',
    slides: [{
        rows: [{
            flex: 0,
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). ' + 
                    'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero. ' +
                    'Integer consequat a ante eget vulputate. Donec interdum(i) hendrerit egestas.'+
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). Etiam ac tortor tincidunt,' +
                    'ultrices eros at (strong), gravida libero. Integer consequat.'+
                    'Donec interdum(i) hendrerit egestas.'
                }, {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). ' + 
                    'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero. ' +
                    'Integer consequat a ante eget vulputate. Donec interdum(i) hendrerit egestas.'+
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). Etiam ac tortor tincidunt,' +
                    'ultrices eros at (strong), gravida libero. Integer consequat.'+
                    'Donec interdum(i) hendrerit egestas.'
                }]
            }]
        },
        {
            flex: 0,
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: '- Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.'
                },{
                    text: '- Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.'
                },{
                    text: '- Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.'
                }]
            }]
        }]
    }]
},
{
    id: sections.requirements.id,
    name: sections.requirements.name,
    icon: 'fa-wrench',
    slides: [{
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el primer slide de los requerimientos tecnicos',
                    args: {}
                }]
            }]
        }]
    }]
},
{
    id: sections.credits.id,
    name: sections.credits.name,
    icon: 'fa-users',
    slides: [{
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el primer slide de los créditos',
                    args: {}
                }]
            }]
        }]
    }]
}];

export const courseContentExtras : {} = {
    menuBars: {
        top: [{
                iconClass: 'fa-home',
                text: sections.init.name,
                action: contentConstants.actions.goToSection,
                data: {
                    target: sections.init.id
                }
            },
            {
                iconClass: 'fa-bullseye',
                text: sections.objectives.name,
                action: contentConstants.actions.goToSection,
                data: {
                    target: sections.objectives.id
                }
            },
            {
                iconClass: 'fa-power-off',
                text: sections.introduction.name,
                action: contentConstants.actions.goToSection,
                data: {
                    target: sections.introduction.id
                }
            },
            {
                iconClass: 'fa-table',
                text: sections.contentTable.name,
                action: contentConstants.actions.goToSection,
                data: {
                    target: sections.contentTable.id
                }
        }],
        bottom: [{
                text: sections.bibliography.name,
                action: contentConstants.actions.goToSection,
                data: {
                    target: sections.bibliography.id
                }
            },
            {
                text: sections.navigationGuide.name,
                action: contentConstants.actions.popup,
                data: {
                    rows: [{
                        cols: [{
                            component: ParagraphComponent,
                            data: [{
                                text: 'Este es el primer slide de la tercera seccion',
                                args: {}
                            }]
                        }]
                    }]
                }
            },
            {
                text: sections.requirements.name,
                action: contentConstants.actions.goToSection,
                data: {
                    target: sections.requirements.id
                }
            },
            {
                text: sections.credits.name,
                action: contentConstants.actions.goToSection,
                data: {
                    target: sections.credits.id
                }
        }]
    },
    copyright: [{
        text: 'Este recurso educativo digital está bajo una %(a)',
        args: {
          a: {
            type: 'link',
            data: {
              innerText: 'licencia de Creative Commons Reconocimiento-NoComercial-SinObraDerivada 2.5 Colombia',
              href: 'http://creativecommons.org/licenses/by-nc-nd/2.5/co/deed.es_ES'
            }
          }
        }
      }, {
        text: 'Además, tiene algunos derechos reservados a sus autores y colaboradores.'
    }]
};

interface Sections{
    id: string,
    name: string,
    icon ?: string,
    slides: Array<Slide>
}

interface Slide{
    rows: Array<Row>,
    style ?: {},
}

interface Row{
    cols: Array<Col>,
    flex ?: number
}

interface Col {
    component: any,
    data: {},
    flex ?: number
}
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
    }
};

export const contentConstants = {
    actions: {
        goToSection: 'goToSection'
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
        }]
    },
    {
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el segundo slide de la primera seccion',
                    args: {}
                }]
            }]
        }]
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
        }]
    },
    {
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el segundo slide de la segunda seccion',
                    args: {}
                }]
            }]
        }]
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
        }]
    },
    {
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el segundo slide de la tercera seccion',
                    args: {}
                }]
            }]
        }]
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
                    text: 'Este es el primer slide de la tercera seccion',
                    args: {}
                }]
            }]
        }]
    },
    {
        rows: [{
            cols: [{
                component: ParagraphComponent,
                data: [{
                    text: 'Este es el segundo slide de la tercera seccion',
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
            }]
    }
};

interface Sections{
    id: string,
    name: string,
    slides: Array<Slide>
}

interface Slide{
    rows: Array<Row>
}

interface Row{
    cols: Array<Col>
}

interface Col {
    component: any,
    data: {}
}
export const LOi18n = {
    title: 'Anestesiología',
    teacher: 'Pedro Herrera',
    unit: 'Bienvenida',
    sections: {
        start: {
            name: 'Inicio',
            slides: {
                0: {
                    name: 'Bienvenida'
                },
                1: {
                    name: 'Instrucción'
                },
                2: {
                    name: 'Sugerencia de navegación'
                },
                3: {
                    name: 'Información del curso'
                }
            }
        },
        objectives: {
            name: 'Objetivos',
            slides: {
                0: {
                    name: 'Objetivo General'
                }
            }
        },
        introduction: {
            name: 'Introducción',
            slides: {
                0: {
                    name: 'Justificación'
                }
            }
        },
        tableOfContents: {
            name: 'Tabla de Contenidos',
            slides: {
                0: {
                    name: 'Tabla de Contenido'
                }
            }
        },
        bibliography: {
            name: 'Bibliografía',
            slides: {
                0: {
                    name: 'Referencias',
                    paragraphs: [{
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). ' +
                        'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero. ' +
                        'Integer consequat a ante eget vulputate. Donec interdum(i) hendrerit egestas. ' +
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit (b). Etiam ac tortor tincidunt, ' +
                        'ultrices eros at (strong), gravida libero. Integer consequat. Donec interdum(i) hendrerit egestas.'
                    }],
                    list: [
                        'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.',
                        'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.',
                        'Etiam ac tortor tincidunt, ultrices eros at (strong), gravida libero.'
                    ]
                }
            }
        },
        techRequirements: {
            name: 'Requerimientos técnicos',
            slides: {
                0: {
                    name: 'Requerimientos'
                }
            }
        },
        credits: {
            name: 'Créditos',
            slides: {
                0: {
                    name: 'Créditos'
                }
            }
        }
    },
    layout: {
        mainHeader: {
            subtitle: {
                prefix: 'Docente:'
            }
        },
        breadcrumb : {
            prefix: 'Unidad'
        },
        navBars: {
            inner: {
                section: {
                    prefix: "Está en:"
                },
                btns: {
                    previous: {
                        tag: "Anterior"
                    },
                    next: {
                        tag: "Siguiente"
                    }
                }
            },
            bottom: {
                items: {
                    navigationGuide: {
                        tag: "Guía de navegación"
                    }
                }
            }
        },
        copyright: {
            p: [{
                text: 'Este recurso educativo digital está bajo una %(copyright)',
                link: 'licencia de Creative Commons Reconocimiento-NoComercial-SinObraDerivada 2.5 Colombia'
            }, {
                text: 'Además, tiene algunos derechos reservados a sus autores y colaboradores.',
                link: ''
            }]
        }
    },
    modals: {
        navigationGuide: {
            title: 'Guía de Navegación',
            list: [
                'Título recurso / Docente',
                'Título unidad',
                'Menú principal',
                'Ubicación actual',
                'Botones para desplazamiento entre contenidos',
                'Información recurso',
                'Licencia',
                'Información contactos'
            ],
            btns: {
                close: {
                    tag: "Cerrar"
                }
            }
        }
    }
};
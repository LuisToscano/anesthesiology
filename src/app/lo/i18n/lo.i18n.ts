export const LOi18n = {
    title: 'Anestesiología',
    teacher: 'Pedro Herrera',
    unit: 'Bienvenida',
    sections: {
        start: {
            name: 'Inicio',
            slides: {
                0: {
                    name: 'Bienvenida',
                    header: 'Bienvenido a la unidad 0 del curso de Anestesiología',
                    body: 'Hola. Mi nombre es %(character). Estaré a su lado durante todo el proceso de aprendizaje,' +
                    'animándolo y brindándole herramientas que le serán muy útiles.',
                    character: 'Jaime'
                },
                1: {
                    name: 'Instrucción',
                    body: 'Preste mucha atención a todas las instrucciones y léalas atentamente.'
                },
                2: {
                    name: 'Sugerencia de navegación',
                    body: 'Por ahora, le sugiero que navegue el curso para que identifique la funcionalidad de cada botón. %(instruction)',
                    instruction: 'Adelante...'
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
                    name: 'Requerimientos',
                    statement: 'Para la correcta visualización de este recurso digital educativo son necesarias las siguientes características y requisitos:',
                    hardware: {
                        tag: 'Hardware',
                        operativeSystem: {
                            tag: 'Sistema operativo',
                            info: 'Windows Vista+, Mac OS X 10.6+'
                        },
                        RAM: {
                            tag: 'RAM',
                            content: [
                                'Windows: 2G de RAM',
                                'Mac OS X: 1G de RAM',
                                'Linux y Solaris: 1G de RAM'
                            ]
                        }
                    },
                    internet: {
                        tag: 'Conexión a Internet',
                        bandwidth: {
                            tag: 'Ancho de banda',
                            info: '1 Mb/seg +'
                        }
                    },
                    browsers: {
                        tag: 'Navegadores',
                        statement: 'El más conocido hoy es Internet Explorer de Microsoft que viene instalado con Windows, pero es posible y recomendable ' +
                        'disponer de alternativas gratuitas que permiten no solo visualizar más rápido, sino de mejor forma los contenidos del curso. De estas ' +
                        'alternativas, se sugiere utilizar Google Chrome y Mozilla Firefox.',
                        statement2: 'Este curso ha sido probado en %(iexplorer) , %(firefox), %(safari) y %(chrome).',
                        iexplorer: 'IE9+',
                        firefox: 'Mozilla 32.0',
                        safari: 'Safari 5.1.10',
                        chrome: 'Chrome 37.0',
                        downloadChrome: 'Descargar Google Chrome',
                        downloadFirefox: 'Descargar Mozilla Firefox'
                    },
                    screenResolution: {
                        tag: 'Resolución de pantalla',
                        statement: 'Para una mejor y más cómoda visualización, se recomienda como resolución mínima %(resolution) píxeles.',
                        resolution: '1024 X 768'
                    },
                    plugins: {
                        tag: '%(plugins) (Reproductores)',
                        statement: 'En este curso se pueden encontrar diferentes contenidos como secuencias de video, animaciones interactivas, objetos de aprendizaje o ' +
                        'textos en formato PDF. Para poder visualizar correctamente estos archivos es necesario tener instalado el reproductor adecuado, provisto gratuitamente ' +
                        'por el creador del formato o quien lo comercializa. Estos reproductores y %(plugins) tienen un autoinstalador, que al ser asistido, hará muy sencilla su implementación.',
                        statement2: 'Los siguientes reproductores son necesarios para seguir este curso, y recomendados para la navegación por Internet en general:',
                        statement3: '%(adobe) es el estándar mundial para visualizar e imprimir documentos PDF en prácticamente cualquier plataforma.',
                        pluginsUpperCase: 'Plugins',
                        pluginsLowerCase: 'plugins',
                        adobe: 'Adobe Reader',
                        downloadAdobe: 'Descargar Adobe Reader'
                    }
                }
            }
        },
        credits: {
            name: 'Créditos',
            slides: {
                0: {
                    name: 'Créditos',
                    DNIA: 'Dirección Nacional de Innovación Académica',
                    production: {
                        tag: 'Producción, diseño y virtualización',
                        list: [{
                            name: 'Edgar Antonio Reyes Montano',
                            role: 'Director'
                        },{
                            name: 'David Moreno Gómez',
                            role: 'Coordinador de diseño'
                        },{
                            name: 'Diana Esperanza López López',
                            role: 'Coordinadora de pedagogía'
                        },{
                            name: 'Victor Eduardo Tenjo',
                            role: 'Adecuación pedagógica'
                        },{
                            name: 'Diana Rozo Rojas',
                            role: 'Diseño de interfaz'
                        },{
                            name: 'Lina Margarita Otálora',
                            role: 'Diseño gráfico'
                        },{
                            name: 'Giselle Pinzon Garzon',
                            role: 'Diseño de personaje'
                        },{
                            name: 'Yenny Agudelo',
                            role: 'Virtualización'
                        }]
                    },
                    author: {
                        tag: 'Autor',
                        name: 'Pedro Herrera',
                        credentials: 'Médico especialista en Anestesiología, Epidemiología y docencia universitaria. ' +
                        'Profesor asistente de la Universidad Nacional de Colombia y médico especialista en el Hospital Santa Clara y ' +
                        'en el Instituto Materno Infantil, instituciones de tercero y cuarto niveles, vinculadas a la formación del recurso humano en salud. ' +
                        'Ejerce labores docentes con estudiantes de pregrado de Medicina y de postgrado en la especialización de Anestesiología y Reanimación. ' +
                        'Orienta la ejecución y publicación de trabajos de investigación en el postgrado de Anestesiólogía.'
                    },
                    images: {
                        tag: 'Créditos imágenes'
                    }
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
import { TabOrganizerComponent } from '../core/components/content-organizers/tab-organizer/tab-organizer.component';
import { SimpleContainerComponent } from '../core/components/content-organizers/simple-container/simple-container.component';
import { ParagraphComponent } from '../core/components/basic/paragraph/paragraph.component';
import { ImgComponent } from '../core/components/basic/img/img.component';
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
                                        innerText: 'Caori Patricia Takeuchi',
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
                            text: 'Este OVA hace uso de las siguientes imágenes:',
                            args: {}
                        }]
                    }]
                },
                {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: '%(photo) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Meteor Space Stars Asteroid',
                                        href: 'https://www.maxpixel.net/Meteor-Space-Stars-Asteroid-1477065'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en'
                                    }
                                }
                            }
                        },{
                            text: '%(photo) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Radio Transmitter Dish',
                                        href: 'https://www.goodfreephotos.com/business-and-technology/radio-transmitter-dish.jpg.php'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/licenses/publicdomain/'
                                    }
                                }
                            }
                        },
                        {
                            text: '%(photo) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Future City Picture',
                                        href: 'http://epicwallpaperz.com/future-city-picture/'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en'
                                    }
                                }
                            }
                        },
                        {
                            text: '%(photo) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Dead Trees',
                                        href: 'https://pxhere.com/en/photo/1063849'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en'
                                    }
                                }
                            }
                        }, {
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Milky Way',
                                        href: 'https://exoplanets.nasa.gov/internal_resources/698'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'NASA',
                                        href: 'http://www.nasa.gov/'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://www.nasa.gov/multimedia/guidelines/index.html'
                                    }
                                }
                            }
                        },
                        {
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Limb of Copernicus Impact Crater',
                                        href: 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA00094_hires.jpg'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'NASA',
                                        href: 'http://www.nasa.gov/'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://www.nasa.gov/multimedia/guidelines/index.html'
                                    }
                                }
                            }
                        },
                        {
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Geodesic shapes on Project Eden, Cornwall dome',
                                        href: 'https://www.flickr.com/photos/elias_daniel/6019904580/'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Elias Gayles',
                                        href: 'https://www.flickr.com/photos/elias_daniel/'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/licenses/by/2.0/'
                                    }
                                }
                            }
                        },
                        {
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Russell Township-ASM Headquarters & Geodesic Dome (OHPTC)',
                                        href: 'https://www.flickr.com/photos/63837784@N08/6035360487'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'ODSA',
                                        href: 'https://www.flickr.com/photos/63837784@N08/'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/licenses/by/2.0/'
                                    }
                                }
                            }
                        },
                        {
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Dome at the South Pole',
                                        href: 'https://www.flickr.com/photos/usnavyseabeemuseum/6887360473'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'U.S. Navy Seabee Museum',
                                        href: 'https://www.flickr.com/photos/usnavyseabeemuseum/'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/licenses/by/2.0/'
                                    }
                                }
                            }
                        }, {
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Tropical biome, Eden Project',
                                        href: 'https://commons.wikimedia.org/wiki/File:Eden_project_tropical_biome.jpg'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Stevekeiretsu (Usuario Wikipedia)',
                                        href: 'https://en.wikipedia.org/wiki/User:Stevekeiretsu'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/licenses/by/1.0/deed.en'
                                    }
                                }
                            }
                        }, {
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Estadio Olímpico Luzhnikí',
                                        href: 'https://commons.wikimedia.org/wiki/File:%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD_%D0%9B%D1%83%D0%B6%D0%BD%D0%B8%D0%BA%D0%B8_(29_%D0%BC%D0%B0%D1%80%D1%82%D0%B0_2017)_%C2%B7_23.jpg'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Government of Moscow',
                                        href: 'https://en.wikipedia.org/wiki/Government_of_Moscow'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/licenses/by/4.0/'
                                    }
                                }
                            }
                        },{
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Invernadero para cultivo de pimiento',
                                        href: 'http://www.flickriver.com/photos/ininsa/7400347942/'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Invernaderos Ininsa',
                                        href: 'http://www.flickriver.com/photos/ininsa/popular-interesting/'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/licenses/by-nc-sa/2.0/'
                                    }
                                }
                            }
                        },{
                            text: '%(photo) de %(owner) / %(copyright)',
                            args: {
                                photo: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Starfield Simulation',
                                        href: 'https://es.wikipedia.org/wiki/Archivo:StarfieldSimulation.gif'
                                    }
                                },
                                owner: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Jahobr (Usuario Wikipedia)',
                                        href: 'https://commons.wikimedia.org/wiki/User:Jahobr'
                                    }
                                },
                                copyright: {
                                    type: ParagraphArgumentType.Link,
                                    data: {
                                        innerText: 'Licencia',
                                        href: 'https://creativecommons.org/publicdomain/zero/1.0/deed.es'
                                    }
                                }
                            }
                        }] 
                    }],
                    classes: ['img-copyright']
                }]
            }]
        }
    }, {
        tag: 'Ayuda',
        icon: 'question',
        action: 'modal',
        data: {
            component: SimpleContainerComponent,
            data: [{
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Ayuda',
                            args: {}
                        }],
                        classes: ['help-title']
                    }]
                },
                {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'No avances o retrocedas entre páginas haciendo uso de tu navegador web.' + 
                            ' Al hacerlo perderías tu progreso actual.',
                            args: {}
                        }],
                        flex: 3
                    }, {
                        type: ComponentType.Basic,
                        component: ImgComponent,
                        data: {
                            source: './assets/img/browser-navbar.PNG',
                            style: {
                                width: '120px',
                                margin: '0 auto'
                            }
                        },
                        flex: 1,
                        style: {
                            'display': 'flex',
                            'flex-direction': 'row',
                            'align-items': 'center'
                        }
                    }],
                    classes: ['help-item']
                },
                {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Usa los botones de navegación ubicados en los extremos laterales del objeto para dirigirte a la anterior o siguiente diapositiva.',
                            args: {}
                        }],
                        flex: 3
                    }, {
                        type: ComponentType.Basic,
                        component: ImgComponent,
                        data: {
                            source: './assets/img/navbtns.PNG',
                            style: {
                                width: '100px',
                                margin: '0 auto'
                            }
                        },
                        flex: 1,
                        style: {
                            'display': 'flex',
                            'flex-direction': 'row',
                            'align-items': 'center'
                        }
                    }],
                    classes: ['help-item']
                },
                {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Accede a los elementos del menú principal que se encuentran a color y se iluminan al contacto del cursor, recorre las actividades y desbloquea asi nuevos caminos.',
                            args: {}
                        }],
                        flex: 3
                    }, {
                        type: ComponentType.Basic,
                        component: ImgComponent,
                        data: {
                            source: './assets/img/asteroid-city.png',
                            style: {
                                width: '150px',
                                margin: '0 auto'
                            }
                        },
                        flex: 1,
                        style: {
                            'display': 'flex',
                            'flex-direction': 'row',
                            'align-items': 'center'
                        }
                    }],
                    classes: ['help-item']
                },
                {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Elementos del menú principal que se encuentren en blanco y negro se activarán mediante el progreso del estudiante en el objeto.',
                            args: {}
                        }],
                        flex: 3
                    }, {
                        type: ComponentType.Basic,
                        component: ImgComponent,
                        data: {
                            source: './assets/img/asteroid-city-disabled.png',
                            style: {
                                width: '150px',
                                margin: '0 auto'
                            }
                        },
                        flex: 1,
                        style: {
                            'display': 'flex',
                            'flex-direction': 'row',
                            'align-items': 'center'
                        }
                    }],
                    classes: ['help-item']
                },
                {
                    cols: [{
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Usa el botón ubicado en la parte inferior derecha cuando se encuentre visible para regresar al menú principal.',
                            args: {}
                        }],
                        flex: 3
                    }, {
                        type: ComponentType.Basic,
                        component: ImgComponent,
                        data: {
                            source: './assets/img/menubtn.PNG',
                            style: {
                                width: '80px',
                                margin: '0 auto'
                            }
                        },
                        flex: 1,
                        style: {
                            'display': 'flex',
                            'flex-direction': 'row',
                            'align-items': 'center'
                        }
                    }],
                    classes: ['help-item']
                }]
            }]
        }
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


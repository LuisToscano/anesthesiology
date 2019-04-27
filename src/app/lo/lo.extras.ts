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


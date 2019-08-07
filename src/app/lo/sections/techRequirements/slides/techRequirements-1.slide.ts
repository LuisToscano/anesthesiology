import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { ParagraphArgumentType, ParagraphClass } from '../../../../core/components/basic/paragraph/paragraph.enum';
import { DownloadComponent } from '../../../../core/components/basic/download/download.component';

const tags = LOi18n.sections.techRequirements.slides[0];

export const techRequirementsSectionSlide1 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.statement,
                args: {}
            }]
        }],
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.hardware.tag,
                args: {}
            }]
        }],
        flex: 0,
        classes: ['subheader', 'p-no-padding-container']
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: '%(tag): ' + tags.hardware.operativeSystem.info,
                args: {
                    tag: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.hardware.operativeSystem.tag,
                            class: ParagraphClass.Bold
                        }
                    }
                }
            }]
        }],
        classes: ['p-small-padding-container'],
        flex: 0
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: '%(tag): ',
                args: {
                    tag: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.hardware.RAM.tag,
                            class: ParagraphClass.Bold
                        }
                    }
                }
            }]
        }],
        classes: ['p-small-padding-container'],
        flex: 0
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: tags.hardware.RAM.content.map(el => {
                return {
                    text: el,
                    args: {}
                };
            })
        }],
        classes: ['p-no-padding-container'],
        style: {
            paddingLeft: '30px'
        },
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.internet.tag,
                args: {}
            }]
        }],
        flex: 0,
        classes: ['subheader', 'p-small-padding-container']
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: '%(tag): ' + tags.internet.bandwidth.info,
                args: {
                    tag: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.internet.bandwidth.tag,
                            class: ParagraphClass.Bold
                        }
                    }
                }
            }]
        }],
        classes: ['p-no-padding-container'],
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.browsers.tag,
                args: {}
            }]
        }],
        flex: 0,
        classes: ['subheader', 'p-small-padding-container']
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.browsers.statement,
                args: {}
            }]
        }],
        classes: ['p-no-padding-container'],
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: DownloadComponent,
            data: {
                text: tags.browsers.downloadChrome,
                img: './assets/img/chrome_icon.png',
                url: 'http://www.google.com/chrome'
            },
            style: {
                flexDirection: 'column',
                alignItems: 'center'
            }
        },{
            type: ComponentType.Basic,
            component: DownloadComponent,
            data: {
                text: tags.browsers.downloadFirefox,
                img: './assets/img/firefox_icon.png',
                url: 'http://www.mozilla.com/es-ES/firefox/'
            },
            style: {
                flexDirection: 'column',
                alignItems: 'center'
            }
        }],
        style: {
            padding: '20px 0'
        },
        flex: 0
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.browsers.statement2,
                args: {
                    iexplorer: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.browsers.iexplorer,
                            class: ParagraphClass.Bold
                        }
                    },
                    firefox: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.browsers.firefox,
                            class: ParagraphClass.Bold
                        }
                    },
                    chrome: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.browsers.chrome,
                            class: ParagraphClass.Bold
                        }
                    },
                    safari: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.browsers.safari,
                            class: ParagraphClass.Bold
                        }
                    }
                }
            }]
        }],
        classes: ['p-no-padding-container'],
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.screenResolution.tag,
                args: {}
            }]
        }],
        flex: 0,
        classes: ['subheader', 'p-small-padding-container']
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.screenResolution.statement,
                args: {
                    resolution: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.screenResolution.resolution,
                            class: ParagraphClass.Bold
                        }
                    }
                }
            }]
        }],
        classes: ['p-no-padding-container'],
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.plugins.tag,
                args: {
                    plugins: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.plugins.pluginsUpperCase,
                            class: ParagraphClass.Italic
                        }
                    }
                }
            }]
        }],
        flex: 0,
        classes: ['subheader', 'p-small-padding-container']
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.plugins.statement,
                args: {
                    plugins: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.plugins.pluginsLowerCase,
                            class: ParagraphClass.Italic
                        }
                    }
                }
            }]
        }],
        classes: ['p-no-padding-container'],
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.plugins.statement2,
                args: {}
            }]
        }],
        classes: ['p-small-padding-container'],
        flex: 0
    }, {
        cols: [{
            type: ComponentType.Basic,
            component: ParagraphComponent,
            data: [{
                text: tags.plugins.statement3,
                args: {
                    adobe: {
                        type: ParagraphArgumentType.Class,
                        data: {
                            innerText: tags.plugins.adobe,
                            class: ParagraphClass.Bold
                        }
                    }
                }
            }]
        }],
        classes: ['p-no-padding-container'],
        flex: 0
    },
    {
        cols: [{
            type: ComponentType.Basic,
            component: DownloadComponent,
            data: {
                text: tags.plugins.downloadAdobe,
                img: './assets/img/adobe_icon.png',
                url: 'http://get.adobe.com/es/reader/'
            }
        }],
        style: {
            padding: '20px 0',
            flexDirection: 'column',
            alignItems: 'center'
        },
        flex: 0
    }],
    style: {
        padding: '0 15px'
    }
};
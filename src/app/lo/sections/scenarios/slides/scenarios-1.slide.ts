import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { DynamicOverlapMenuComponent } from '../../../../core/components/content-organizers/dynamic-overlap-menu/dynamic-overlap-menu.component';
import { ComponentType } from '../../../../core/enums/component-type.enum';

var statement = 'Una vez instalado el domo, empieza el proceso de colonización del planeta, en dos sectores ' +
'donde la superficie del planeta era relativamente plana. En el primer sector estaban las grandes ' +
'construcciones para las colonias y en el segundo sector las grandes granjas para garantizar la ' +
'seguridad alimentaria. En el interior del domo se mantiene una gravedad artificial de 10m/s2.';

export const scenariosSectionSlide1 : Slide = {
    name: 'Starting Colonization',
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: DynamicOverlapMenuComponent,
            data: {
                defaultSelection: 'Asteroide XXC1',
                bgImage: 'assets/img/asteroid-bg.png',
                btns: [{
                    tag: 'Introducción',
                    width: 40,
                    top: 53.5,
                    left: 4,
                    target: 'intro',
                    validateSection: '',
                    disableOnInteractions: false,
                    disableOnVisit: false,
                    bgImages: {
                        normal: 'asteroid-city.png' ,
                        hover: 'asteroid-city-hover.png',
                        disabled: 'asteroid-city-disabled.png'
                    }
                },{
                    tag: 'Ejercicio 1',
                    width: 22,
                    top: 16,
                    left: 20,
                    target: 'scene1exercise1',
                    validateSection: 'intro',
                    disableOnInteractions: false,
                    disableOnVisit: true,
                    bgImages: {
                        normal: 'asteroid-dome-section.png' ,
                        hover: 'asteroid-dome-section-hover.png',
                        disabled: 'asteroid-dome-section-disabled.png'
                    }
                },{
                    tag: 'Ejercicio 2',
                    width: 30,
                    top: 60,
                    left: 60,
                    target: 'scene1exercise2',
                    validateSection: 'scene1exercise1',
                    disableOnInteractions: true,
                    disableOnVisit: false,
                    bgImages: {
                        normal: 'asteroid-farm.png' ,
                        hover: 'asteroid-farm-hover.png',
                        disabled: 'asteroid-farm-disabled.png'
                    }
                },{
                    tag: 'Ejercicio 3',
                    width: 24,
                    top: 31,
                    left: 41,
                    target: 'scene1exercise3',
                    validateSection: 'scene1exercise2',
                    disableOnInteractions: true,
                    disableOnVisit: false,
                    bgImages: {
                        normal: 'asteroid-antenna.png' ,
                        hover: 'asteroid-antenna-hover.png',
                        disabled: 'asteroid-antenna-disabled.png'
                    }
                }]
            },
            style: {
                'flex-direction': 'row',
                'align-items': 'center'
            }
        }]
    }],
    classes: ['asteroid-scene']
};
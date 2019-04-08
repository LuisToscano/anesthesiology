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
                bgImage: 'assets/img/landscape-test.jpg',
                btns: [{
                    tag: 'Introducción',
                    width: 10,
                    top: 65,
                    left: 3,
                    target: 'scene1exercise1',
                    disableOnInteractions: false,
                    disableOnVisit: false,
                    bgImages: {
                        normal: 'house-nobg-test.png' ,
                        hover: 'house-no-bg2.png',
                        disabled: 'gray-house-nobg.png'
                    }
                }]
            },
            style: {
                'flex-direction': 'row',
                'align-items': 'center'
            }
        }]
    }],
    style: {
        background: '#142325'
    }
};
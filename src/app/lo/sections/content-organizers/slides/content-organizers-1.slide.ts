import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { TestOrganizerComponent } from '../../../../core/components/content-organizers/test-organizer/test-organizer.component';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { TitleComponent } from '../../../../core/components/basic/title/title.component';

export const contentOrganizerSectionSlide1 : Slide = {
    name: 'Organizador de Contenido 1',
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: TestOrganizerComponent,
            data: [{
                name: 'Opción 1',
                rows: [{
                    cols: [{
                        type: ComponentType.Basic,
                        component: TitleComponent,
                        data: {
                            title: 'Título de opción 1'
                        }
                    }, {
                        type: ComponentType.Basic,
                        component: ParagraphComponent,
                        data: [{
                            text: 'Soy el texto de la opción 1'
                        }]
                    }]
                }]
            }]
        }]
    }],
    style: {
        paddingTop: '50px'
    }
};
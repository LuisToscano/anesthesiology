import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { CharacterDialogComponent } from '../../../../core/components/content-organizers/character-dialog/character-dialog.component';
const tags = LOi18n.sections.start.slides[1];

export const startSectionSlide2 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: CharacterDialogComponent,
            data: {
                character: './assets/img/personaje.png',
                paragraphs: [{
                    text: tags.body,
                    args: {}
                }]
            }
        }]
    }],
    classes: ['primary-section']
};
import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { ParagraphComponent } from '../../../../core/components/basic/paragraph/paragraph.component';
import { CharacterDialogComponent } from '../../../../core/components/content-organizers/character-dialog/character-dialog.component';
import { ParagraphArgumentType } from '../../../../core/components/basic/paragraph/paragraph.enum';

const tags = LOi18n.sections.start.slides[2];

export const startSectionSlide3 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: CharacterDialogComponent,
            data: {
                character: './assets/img/personaje.png',
                paragraphs: [{
                    text: tags.body,
                    args: {
                        instruction: {
                            type: ParagraphArgumentType.Class,
                            data: {
                                innerText: tags.instruction,
                                class: 'dialog-highlight'
                            }
                        }
                    }
                }]
            }
        }]
    }],
    classes: ['primary-section']
};
import { Slide } from '../../../../core/interfaces/lo-content.interface';
import { LOi18n } from "../../../i18n/lo.i18n";
import { ComponentType } from '../../../../core/enums/component-type.enum';
import { CharacterDialogComponent } from '../../../../core/components/content-organizers/character-dialog/character-dialog.component';
import { ParagraphArgumentType } from '../../../../core/components/basic/paragraph/paragraph.enum';

const tags = LOi18n.sections.start.slides[0];

export const startSectionSlide1 : Slide = {
    name: tags.name,
    rows: [{
        cols: [{
            type: ComponentType.ContentOrganizer,
            component: CharacterDialogComponent,
            data: {
                character: './assets/img/personaje.png',
                paragraphs: [{
                    text: '%(header)',
                    args: {
                        header: {
                            type: ParagraphArgumentType.Class,
                            data: {
                                innerText: tags.header,
                                class: 'dialog-header'
                            }
                        }
                    }
                }, {
                    text: tags.body,
                    args: {
                        character: {
                            type: ParagraphArgumentType.Class,
                            data: {
                                innerText: tags.character,
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
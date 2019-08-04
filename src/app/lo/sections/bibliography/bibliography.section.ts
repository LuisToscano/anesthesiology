import { Sections } from '../../../core/interfaces/lo-content.interface';
import { bibliographySectionSlide1 } from './slides/bibliography-1.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const bibliographySection : Sections = {
    id: 'bibliography',
    name: LOi18n.sections.bibliography.name,
    icon: 'book',
    slides: [
        bibliographySectionSlide1
    ]
};
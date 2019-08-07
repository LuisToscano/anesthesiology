import { Sections } from '../../../core/interfaces/lo-content.interface';
import { creditsSectionSlide1 } from './slides/credits-1.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const creditsSection : Sections = {
    id: 'credits',
    icon: 'users',
    name: LOi18n.sections.credits.name,
    slides: [
        creditsSectionSlide1
    ]
};
import { Sections } from '../../../core/interfaces/lo-content.interface';
import { introductionSectionSlide1 } from './slides/introduction-1.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const introductionSection : Sections = {
    id: 'introduction',
    name: LOi18n.sections.introduction.name,
    slides: [
        introductionSectionSlide1
    ]
};
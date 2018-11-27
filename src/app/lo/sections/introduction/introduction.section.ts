import { Sections } from '../../../core/interfaces/lo-content.interface';
import { introductionSectionSlide1 } from './slides/introduction-1.slide';
import { introductionSectionSlide2 } from './slides/introduction-2.slide';

export const introductionSection : Sections = {
    id: 'intro',
    name: 'Introducción',
    slides: [
        introductionSectionSlide1,
        introductionSectionSlide2
    ]
};
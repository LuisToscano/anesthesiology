import { Sections } from '../../../core/interfaces/lo-content.interface';
import { introductionSectionSlide1 } from './slides/introduction-1.slide';
import { introductionSectionSlide2 } from './slides/introduction-2.slide';
import { introductionSectionSlide3 } from './slides/introduction-3.slide';
import { introductionSectionSlide4 } from './slides/introduction-4.slide';
import { introductionSectionSlide5 } from './slides/introduction-5.slide';
import { introductionSectionSlide6 } from './slides/introduction-6.slide';

export const introductionSection : Sections = {
    id: 'intro',
    name: 'Introducción',
    slides: [
        introductionSectionSlide1,
        introductionSectionSlide2,
        introductionSectionSlide3,
        introductionSectionSlide4,
        introductionSectionSlide5,
        introductionSectionSlide6
    ]
};
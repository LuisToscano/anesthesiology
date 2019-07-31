import { Sections } from '../../../core/interfaces/lo-content.interface';
import { startSectionSlide1 } from './slides/start-1.slide';
import { startSectionSlide2 } from './slides/start-2.slide';
import { startSectionSlide3 } from './slides/start-3.slide';
import { startSectionSlide4 } from './slides/start-4.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const startSection : Sections = {
    id: 'start',
    name: LOi18n.sections.start.name,
    slides: [
        startSectionSlide1,
        startSectionSlide2,
        startSectionSlide3,
        startSectionSlide4
    ]
};
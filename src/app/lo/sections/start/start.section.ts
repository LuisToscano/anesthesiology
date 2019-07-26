import { Sections } from '../../../core/interfaces/lo-content.interface';
import { startSectionSlide1 } from './slides/start-1.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const startSection : Sections = {
    id: 'start',
    name: LOi18n.sections.start.name,
    slides: [
        startSectionSlide1
    ]
};
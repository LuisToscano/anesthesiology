import { Sections } from '../../../core/interfaces/lo-content.interface';
import { objectivesSectionSlide1 } from './slides/objectives-1.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const objectivesSection : Sections = {
    id: 'objectives',
    name: LOi18n.sections.objectives.name,
    slides: [
        objectivesSectionSlide1
    ]
};
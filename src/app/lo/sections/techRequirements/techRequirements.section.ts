import { Sections } from '../../../core/interfaces/lo-content.interface';
import { techRequirementsSectionSlide1 } from './slides/techRequirements-1.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const techRequirementsSection : Sections = {
    id: 'techRequirements',
    icon: 'wrench',
    name: LOi18n.sections.techRequirements.name,
    slides: [
        techRequirementsSectionSlide1
    ]
};
import { Sections } from '../core/interfaces/lo-content.interface';
import { basicComponentsSection } from './sections/basic-components/basic-components.section';
import { learningActivitiesSection } from './sections/learning-activities/learning-activities.section';
import { contentOrganizersSection } from './sections/content-organizers/content-organizers.section';

export const LOContent : Array<Sections> = [
    basicComponentsSection,
    learningActivitiesSection,
    contentOrganizersSection
];
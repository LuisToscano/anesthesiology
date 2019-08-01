import { Sections } from '../core/interfaces/lo-content.interface';
import { startSection } from './sections/start/start.section';
import { objectivesSection } from './sections/objectives/objectives.section';
import { introductionSection } from "./sections/introduction/introduction.section";
import { tableOfContentsSection } from './sections/table-of-contents/table-of-contents.section';
import { bibliographySection } from './sections/bibliography/bibliography.section';
import { techRequirementsSection } from './sections/techRequirements/techRequirements.section';
import { creditsSection } from './sections/credits/credits.section';

export const LOContent : Array<Sections> = [
    startSection,
    objectivesSection,
    introductionSection,
    tableOfContentsSection,
    bibliographySection,
    techRequirementsSection,
    creditsSection
];
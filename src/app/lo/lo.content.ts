import { Sections } from '../core/interfaces/lo-content.interface';
import { startSection } from './sections/start/start.section';
import { objectivesSection } from './sections/objectives/objectives.section';
import { introductionSection } from "./sections/introduction/introduction.section";
import { tableOfContentsSection } from './sections/table-of-contents/table-of-contents.section';

export const LOContent : Array<Sections> = [
    startSection,
    objectivesSection,
    introductionSection,
    tableOfContentsSection
];
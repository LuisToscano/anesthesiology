import { Sections } from '../../../core/interfaces/lo-content.interface';
import { tableOfContentsSectionSlide1 } from './slides/table-of-contents-1.slide';
import { LOi18n } from "../../i18n/lo.i18n";

export const tableOfContentsSection : Sections = {
    id: 'tableOfContents',
    name: LOi18n.sections.tableOfContents.name,
    slides: [
        tableOfContentsSectionSlide1
    ]
};
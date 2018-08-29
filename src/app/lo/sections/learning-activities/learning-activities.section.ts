import { Sections } from '../../../core/interfaces/lo-content.interface';
import { learningActivitiesSectionSlide1 } from './slides/learning-activities-1.slide';
import { learningActivitiesSectionSlide2 } from './slides/learning-activities-2.slide';

export const learningActivitiesSection : Sections = {
    id: 'learningActivities',
    name: 'Actividades de Aprendizaje',
    slides: [
        learningActivitiesSectionSlide1,
        learningActivitiesSectionSlide2
    ]
};
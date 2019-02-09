import { Sections } from '../../../../core/interfaces/lo-content.interface';
import { firstScenarioSecondExerciseSlide1 } from './slides/first-scenario-second-exam-1.slide';
import { firstScenarioSecondExerciseSlide2 } from './slides/first-scenario-second-exam-2.slide';

export const firstSceneSecondExerciseSection : Sections = {
    id: 'scene1exercise2',
    name: 'First Scene Second Exam',
    slides: [
        firstScenarioSecondExerciseSlide1,
        firstScenarioSecondExerciseSlide2
    ]
};
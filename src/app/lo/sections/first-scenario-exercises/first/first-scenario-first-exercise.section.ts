import { Sections } from '../../../../core/interfaces/lo-content.interface';
import { firstScenarioFirstExerciseSlide1 } from './slides/first-scenario-first-exercise-1.slide';
import { firstScenarioFirstExerciseSlide2 } from './slides/first-scenario-first-exercise-2.slide';

export const firstSceneFirstExerciseSection : Sections = {
    id: 'scene1exercise1',
    name: 'First Scene First Exam',
    slides: [
        firstScenarioFirstExerciseSlide1,
        firstScenarioFirstExerciseSlide2
    ]
};
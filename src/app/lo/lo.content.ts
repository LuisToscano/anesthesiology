import { Sections } from '../core/interfaces/lo-content.interface';
import { coverSection } from './sections/cover/cover.section';
import { introductionSection } from './sections/introduction/introduction.section';
import { scenariosSection } from './sections/scenarios/scenarios';
import { firstSceneFirstExerciseSection } from './sections/first-scenario-exercises/first/first-scenario-first-exercise.section';
import { firstSceneSecondExerciseSection } from './sections/first-scenario-exercises/second/first-scenario-second-exercise.section';
import { firstSceneThirdExerciseSection } from './sections/first-scenario-exercises/third/first-scenario-third-exercise.section';

export const LOContent : Array<Sections> = [
    coverSection,
    scenariosSection,
    introductionSection,
    firstSceneFirstExerciseSection,
    firstSceneSecondExerciseSection,
    firstSceneThirdExerciseSection
];
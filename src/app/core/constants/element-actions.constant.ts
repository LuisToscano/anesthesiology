import { ElementAction } from '../enums/element-action.enum';
var elementActions = {};

elementActions[ElementAction.GoToSection] = (data, providers) => {
    return {
        onClick: () => {
            providers.navigation.goToSectionSlide(data.target, 0); 
        }
    };
};

elementActions[ElementAction.GoToSectionSlide] = (data, providers) => {
    return {
        onClick: data.target ? () => {
            providers.navigation.goToSectionSlide(data.target.section, data.target.slide); 
        } : () => {}
    };
};

elementActions[ElementAction.GoToSlide] = (data, providers) => {
    return {
        onClick: data.target ? () => {
            providers.navigation.goToSectionSlide(
                providers.navigation.getCurrentPosition().section.getId(),
                data.target
            ); 
        } : () => {}
    };
};

elementActions[ElementAction.ActiveIfCurrentSection] = (data, providers) => {
    return {
        isActive: () => {
            return providers.navigation.getCurrentPosition().section.getId() === data.target;
        }
    };
};

elementActions[ElementAction.ActiveIfSlideInteractionsDone] = (data, providers) => {
    return {
        isActive: () => {
            return providers.interactions.areAllSlideInteractionsCorrect(
                providers.navigation.getCurrentPosition().section.getId(),
                data.target
            )
        }
    };
};

elementActions[ElementAction.ActiveIfSectionInteractionsDone] = (data, providers) => {
    return {
        isActive: () => {
            return providers.interactions.areAllSectionInteractionsCorrect(data.target)
        }
    };
};

export const ElementActions = elementActions;
import { Injectable } from '@angular/core';
import { NavigationProvider } from './navigation.provider';
import { SCORMProvider } from './scorm.provider';
import { CourseContentProvider } from './course-content.provider';
import { NavPosition } from '../interfaces/nav-position.interface';
import * as _ from "lodash";

@Injectable()
export class StateProvider {

    private state = {
        sections: {}
    };
    private currentPosition : NavPosition;

    constructor(
        private navigation : NavigationProvider,
        private scorm : SCORMProvider,
        private content : CourseContentProvider
    ) {}

    init() {
        this.scorm.init();
        this.content.init();
        this.navigation.init();
        this.currentPosition = this.navigation.getCurrentPosition();
        this.navigation.slideChanged.subscribe(this.currentSlideChanged.bind(this));
        _.forEach(this.content.courseInteractions, (interaction) => {
            this.scorm.registerInteraction(interaction);
        });
    }

    getCurrentPosition() : NavPosition {
        return this.navigation.getCurrentPosition();
    }

    private currentSlideChanged(navPos : NavPosition) {
        this.scorm.setLocation(navPos);
        this.updateNavigationState(navPos);
    }

    private updateNavigationState(navPos : NavPosition) {
        let sectionId = navPos.section.getId();

        if (!this.state.sections.hasOwnProperty(sectionId)) {
            this.state.sections[sectionId] = {
                visited: []
            };
        }

        if (_.includes(this.state.sections[sectionId].visited, navPos.slide)) {
            this.state.sections[sectionId].visited.push(navPos.slide);
            //this.scorm.setSuspendData(this.state);
        }
    }
}
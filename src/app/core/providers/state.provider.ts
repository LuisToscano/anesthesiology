import { Injectable } from '@angular/core';
import { NavigationProvider } from './navigation.provider';
import { SCORMProvider } from './scorm.provider';
import { CourseContentProvider } from './course-content.provider';
import { NavPosition } from '../interfaces/nav-position.interface';
import { InteractionsProvider } from '../providers/interactions.provider';
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
        private content : CourseContentProvider,
        private interactions : InteractionsProvider
    ) {}

    init() {
        this.scorm.init();
        this.content.init();
        this.navigation.init();
        this.interactions.init();
        this.currentPosition = this.navigation.getCurrentPosition();
        this.navigation.getSlideChangedObservable().subscribe(this.currentSlideChanged.bind(this));
        _.forEach(this.interactions.getInteractions(), (interaction) => {
            this.scorm.registerInteraction(interaction);
        });
    }

    getCurrentState() {
        return {
            position: this.navigation.getCurrentPosition(),
            interactions: this.interactions.getInteractionsStatus()
        };
    }

    getCurrentPosition() : NavPosition {
        return this.navigation.getCurrentPosition();
    }

    getInteractions() : any {
        return this.interactions.getInteractionsStatus();
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
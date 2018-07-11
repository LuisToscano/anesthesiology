import { Injectable } from '@angular/core';
import { LO } from '../../lo/lo.main';
import { NavigationProvider } from './navigation.provider';
import { NavPosition } from '../interfaces/nav-position.interface';

declare var pipwerks;

const SCORMDataModel = {
    location: 'cmi.location'
}

@Injectable()
export class SCORMProvider {

    constructor(private navigation : NavigationProvider) {}

    init() {
        this.validateSCORMAvailable(() => {
            pipwerks.SCORM.init();
            this.navigation.slideChanged.subscribe(this.setLocation.bind(this));
            this.setLocation(this.navigation.getCurrentPosition());
        });
    }

    setLocation(position : NavPosition) {
        console.log('position', position);
        this.validateSCORMAvailable(pipwerks.SCORM.set, SCORMDataModel.location,
            'section-' + position.section + '-slide-' + position.slide);
    }

    getLocation() {
        return this.validateSCORMAvailable(pipwerks.SCORM.get, SCORMDataModel.location);
    }

    private validateSCORMAvailable( callback : (... args) => any, ... argums) {
        if (LO && LO.SCORM) { callback(argums); }
    }
}
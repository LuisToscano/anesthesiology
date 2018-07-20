import { Injectable } from '@angular/core';
import { LO } from '../../lo/lo.main';
import { NavPosition } from '../interfaces/nav-position.interface';
import { LocationSummary } from '../interfaces/location-summary.interface';
import * as _ from "lodash";

declare var pipwerks;

const SCORMDataModel = {
    location: 'cmi.location',
    suspendData: 'cmi.suspend_data',
    completionStatus: {
        tag: 'cmi.completion_status',
        complete: 'complete',
        incomplete: 'incomplete'
    },
    successStatus: {
        tag: 'cmi.success_status',
        passed: 'passed',
        failed: 'failed'
    }
}

@Injectable()
export class SCORMProvider {

    constructor() {}

    init() {
        this.validateSCORMAvailable(() => {
            pipwerks.SCORM.init();
            this.setLOIncomplete();
            this.setLOFailure();
        });
    }

    setLocation(position : NavPosition) {
        let locationSummary : LocationSummary = {
            section: position.section.getId(),
            slide: position.slide
        };
        this.setValidatedSCORMData(SCORMDataModel.location, JSON.stringify(locationSummary));
    }

    setLOIncomplete() {
        this.setValidatedSCORMData(SCORMDataModel.completionStatus.tag, SCORMDataModel.completionStatus.incomplete);
    }

    setLOComplete() {
        this.setValidatedSCORMData(SCORMDataModel.completionStatus.tag, SCORMDataModel.completionStatus.complete);
    }

    setLOFailure() {
        this.setValidatedSCORMData(SCORMDataModel.successStatus.tag, SCORMDataModel.successStatus.failed);
    }

    setLOSuccess() {
        this.setValidatedSCORMData(SCORMDataModel.successStatus.tag, SCORMDataModel.successStatus.passed);
    }

    setSuspendData(suspendData : object) {
        this.setValidatedSCORMData(SCORMDataModel.suspendData, JSON.stringify(suspendData));
    }

    getSuspendData() {
        return this.getValidatedSCORMData(SCORMDataModel.suspendData);
    }

    getLOCompletionStatus() : string {
        return this.getValidatedSCORMData(SCORMDataModel.completionStatus.tag);
    }

    getLOSuccessStatus() : string {
        return this.getValidatedSCORMData(SCORMDataModel.successStatus.tag);
    }

    getLocation() : LocationSummary {
        let location = this.getValidatedSCORMData(SCORMDataModel.location);
        return _.isString(location) && location.length > 0 ? JSON.parse(location) : null;
    }

    private setValidatedSCORMData(dataModel, value) {
        this.validateSCORMAvailable(pipwerks.SCORM.set, dataModel, value);
    }

    private getValidatedSCORMData(dataModel) {
        return this.validateSCORMAvailable(pipwerks.SCORM.get, dataModel);
    }

    private validateSCORMAvailable( callback : (... args) => any, dataModel?, value?) {
        return LO && LO.SCORM ?
                value && dataModel ?
                  callback(dataModel, value) : dataModel ?
                    callback(dataModel) : callback()
                : null;
    }
}
import { Injectable } from '@angular/core';
import { LO } from '../../lo/lo.main';
import { NavPosition } from '../interfaces/nav-position.interface';
import { LOInteraction } from '../interfaces/lo-interaction.interface';
import { LocationSummary } from '../interfaces/location-summary.interface';
import { SCORMInteractionResult, SCORMCompletionStatus, SCORMSuccessStatus } from '../enums/scorm.enum';
import * as _ from "lodash";

declare var pipwerks;

const SCORMDataModel = {
    location: 'cmi.location',
    suspendData: 'cmi.suspend_data',
    completionStatus: 'cmi.completion_status',
    successStatus: 'cmi.success_status',
    interaction: {
        tag: 'cmi.interactions',
        id: 'id',
        idPrefix: 'learning-object-interaction-',
        response: 'learner_response',
        result: 'result',
        type: 'type',
        weight: 'weighting',
        description: 'description'
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
        this.setValidatedSCORMData(SCORMDataModel.completionStatus, SCORMCompletionStatus.Incomplete);
    }

    setLOComplete() {
        this.setValidatedSCORMData(SCORMDataModel.completionStatus, SCORMCompletionStatus.Completed);
    }

    setLOFailure() {
        this.setValidatedSCORMData(SCORMDataModel.successStatus, SCORMSuccessStatus.Failed);
    }

    setLOSuccess() {
        this.setValidatedSCORMData(SCORMDataModel.successStatus, SCORMSuccessStatus.Passed);
    }

    setSuspendData(suspendData : object) {
        this.setValidatedSCORMData(SCORMDataModel.suspendData, JSON.stringify(suspendData));
    }

    registerInteraction(interaction : LOInteraction) {
        let prefix = SCORMDataModel.interaction.tag + '.' + interaction.interactionId + '.';
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.id,
            SCORMDataModel.interaction.idPrefix + interaction.interactionId);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.type, interaction.type);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.weight, interaction.weight);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.description, interaction.description);
    }

    submitInteraction(id : number, response : string, isCorrect : boolean) {
        let prefix = SCORMDataModel.interaction.tag + '.' + id + '.';
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.response, response);
        this.setValidatedSCORMData(prefix + SCORMDataModel.interaction.result,
            isCorrect ? SCORMInteractionResult.Correct : SCORMInteractionResult.Incorrect);
    }

    getSuspendData() {
        return this.getValidatedSCORMData(SCORMDataModel.suspendData);
    }

    getLOCompletionStatus() : string {
        return this.getValidatedSCORMData(SCORMDataModel.completionStatus);
    }

    getLOSuccessStatus() : string {
        return this.getValidatedSCORMData(SCORMDataModel.successStatus);
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
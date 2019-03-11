import { SCORMInteractionType } from '../enums/scorm.enum';

export interface LOInteraction{
    interactionId : number;
    type: SCORMInteractionType;
    weight: number;
    description : string;
    section : string;
    slide : number;
    data ?: any;
}
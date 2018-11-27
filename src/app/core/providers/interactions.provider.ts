import { Injectable } from '@angular/core';
import { LOInteraction } from '../interfaces/lo-interaction.interface';
import { InteractionStatus } from '../enums/interactions.enum';
import * as _ from "lodash";

@Injectable()
export class InteractionsProvider {
  private interactions : Array<LOInteraction>;
  private interactionsStatus = {};

  constructor() {
    this.interactions = [];
  }

  init() {
    _.each(this.interactions, interaction => {
      this.interactionsStatus[interaction.interactionId] = {
        status: InteractionStatus.Unanswered,
        response: '',
        attempts: 0
      }
    });
  }

  addInteraction(interaction : LOInteraction) {
    this.interactions.push(interaction);
  }

  getInteractions() : Array<LOInteraction> {
    return this.interactions;
  }

  getInteractionsStatus() : any {
    return this.interactionsStatus;
  }

  setInteractions(interactions : Array<LOInteraction>) {
    this.interactions = interactions;
  }

  submitInteraction(id : number, response : string, isCorrect : boolean) {
    this.interactionsStatus[id].status = isCorrect ?
      InteractionStatus.Correct : InteractionStatus.Wrong;
    this.interactionsStatus[id].attempts += 1;
    this.interactionsStatus[id].response = response;
  }

  isInteractionCorrect(interactionId : number) {
    return this.interactionsStatus[interactionId].status === InteractionStatus.Correct;
  }

  areAllSlideInteractionsCorrect(section : string, slide : number) {
    return _.every(_.filter(this.interactions, interaction => {
      return interaction.section === section && interaction.slide === slide;
    }), filteredInteraction => {
      return this.interactionsStatus[filteredInteraction.interactionId]
        .status === InteractionStatus.Correct;
    });
  }
}
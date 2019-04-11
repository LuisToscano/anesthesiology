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
        attempts: 0,
        previouslyCorrect: false
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

  setInteractionData(id : number, data : any) {
    this.interactionsStatus[id].data = data;
  }

  resetInteraction(id: number, data ?: any) {
    if (this.interactionsStatus[id].status === InteractionStatus.Correct) {
      this.interactionsStatus[id].previouslyCorrect = true;
    }
    this.interactionsStatus[id].status = InteractionStatus.NewAttempt;
    this.interactionsStatus[id].attempts = 0;
    this.interactionsStatus[id].response = '';
    if (data) {
      this.interactionsStatus[id].data = data;
    }
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
        .status === InteractionStatus.Correct ||
        this.interactionsStatus[filteredInteraction.interactionId]
        .previouslyCorrect === true;
    });
  }

  areAllSectionInteractionsCorrect(section : string) {
    return _.every(_.filter(this.interactions, interaction => {
      return interaction.section === section;
    }), filteredInteraction => {
      return this.interactionsStatus[filteredInteraction.interactionId]
        .status === InteractionStatus.Correct ||
        this.interactionsStatus[filteredInteraction.interactionId]
        .previouslyCorrect === true;
    });
  }
}
import { Injectable } from '@angular/core';
import { LO } from '../../lo/lo.main';
import { CourseSection } from '../classes/course-section.class';
import { ComponentType } from '../enums/component-type.enum';
import { SCORMInteractionType } from '../enums/scorm.enum';
import { LOStructureProvider } from '../providers/lo-structure.provider';
import { InteractionsProvider } from '../providers/interactions.provider';
import { ActionsProvider } from '../providers/actions.provider';
import * as _ from "lodash";

@Injectable()
export class CourseContentProvider {

  constructor(
      private LOStructure : LOStructureProvider,
      private actions : ActionsProvider,
      private interactions : InteractionsProvider
    ) {}

  init(){
    let interactionCount = 0;
    _.forEach(LO.content, section => {
        let newSection = new CourseSection(section.id, section.name, section.icon)
        .createSlides(section.slides.length);
        _.forEach(newSection.getSlides(), (slide, idx) => {
            let rows = _.find(section.slides[idx].rows, row => {
                return Number.isInteger(row.flex);
            }) ? _.map(section.slides[idx].rows, row => {
                return Number.isInteger(row.flex) ? row.flex : 1;
            }) : section.slides[idx].rows.length;
            slide.setName(section.slides[idx].name);
            slide.setRows(rows);
            slide.setStyle(section.slides[idx].style);
            _.forEach(slide.getRows(), (row, idy) => {
                let cols = _.find(section.slides[idx].rows[idy].cols,
                    col => { return Number.isInteger(col.flex);}) ?
                _.map(section.slides[idx].rows[idy].cols, col => {
                    return Number.isInteger(col.flex) ? col.flex : 1;
                }) : section.slides[idx].rows[idy].cols.length;
                row.setCols(cols);
                _.forEach(row.getCols(), (col, idz) => {
                    let colData = section.slides[idx].rows[idy].cols[idz];
                    if (colData.actions) {
                        this.actions.prepareElementAction(
                            _.pick(colData, ['type', 'component', 'data', 'actions'])
                        );
                    }
                    if (colData.type === ComponentType.LearningActivity) {
                        let scormData = (<any>colData.data).SCORM;
                        let statement = (<any>colData.data).statement;
                        this.interactions.addInteraction({
                            interactionId: ++interactionCount,
                            type: scormData && scormData.type ? scormData.type : SCORMInteractionType.Choice,
                            weight: scormData && scormData.weight ? scormData.weight : 1,
                            description: statement ? statement : '',
                            section: section.id,
                            slide: idx
                        });
                        col.setContent(colData.component, _.extend(colData.data, {
                            interactionId: interactionCount,
                            submitAction: this.actions.prepareSubmitAction(colData.data)
                        }));
                    } else {
                        col.setContent(colData.component, colData.data);
                    }
                });
            });
        });
        this.LOStructure.addSection(newSection);
    });
  }
}
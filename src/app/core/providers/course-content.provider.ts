import { Injectable } from '@angular/core';
import { LO } from '../../lo/lo.main';
import { CourseSection } from '../classes/course-section.class';
import { ComponentType } from '../enums/component-type.enum';
import { SCORMInteractionType } from '../enums/scorm.enum';
import { LOStructureProvider } from '../providers/lo-structure.provider';
import { InteractionsProvider } from '../providers/interactions.provider';
import { ActionsProvider } from '../providers/actions.provider';
import { CourseRow } from '../classes/course-row.class';
import * as _ from "lodash";

@Injectable()
export class CourseContentProvider {

  interactionCount : number;

  constructor(
      private LOStructure : LOStructureProvider,
      private actions : ActionsProvider,
      private interactions : InteractionsProvider
    ) {
      this.interactionCount = 0;
    }

  init(){
    _.forEach(LO.content, this.prepareSection.bind(this));
  }

  private prepareSection(sectionObj) {
    let newSection = new CourseSection(sectionObj.id, sectionObj.name, sectionObj.icon)
    .createSlides(sectionObj.slides.length);
    _.forEach(newSection.getSlides(), (slide, idx) => {
        this.prepareSlide(sectionObj, slide, idx);
    });
    this.LOStructure.addSection(newSection);
  }

  private prepareSlide(sectionObj, slide, idx) {
    let slideObj = sectionObj.slides[idx];
    let rowsObj = slideObj.rows;
    let doRowsHaveFlexAssigned = _.some(rowsObj, rowObj => { 
        return _.isInteger(rowObj.flex);
    });
    let rowsParam = doRowsHaveFlexAssigned ? _.map(rowsObj, rowObj => {
        return _.isInteger(rowObj.flex) ? rowObj.flex : 1;
    }) : rowsObj.length;
    slide.setName(slideObj.name);
    slide.setRows(rowsParam);
    slide.setStyle(slideObj.style);
    if (slideObj.classes) {
      slide.setClasses(slideObj.classes);
    }
    _.forEach(slide.getRows(), (row, idy) => {
        this.prepareRow(sectionObj, slideObj, idx, row, idy);
    });
  }

  private prepareRow(sectionObj, slideObj, slideIdx, row, idy) {
    let rowObj = slideObj.rows[idy];
    let colsObj = rowObj.cols;
    let doColsHaveFlexAssigned = _.some(colsObj, colObj => {
        return _.isInteger(colObj.flex);
    });
    let colsParam = doColsHaveFlexAssigned ? _.map(colsObj, col => {
        return _.isInteger(col.flex) ? col.flex : 1;
    }) : colsObj.length;
    row.setCols(colsParam);
    
    if (rowObj.style) {
      row.setStyle(rowObj.style);
    }

    if (rowObj.classes) {
      row.setClasses(rowObj.classes);
    }
    
    _.forEach(row.getCols(), (col, idz) => {
        this.prepareColumn(sectionObj, slideIdx, rowObj, col, idz);
    });
  }

  private prepareColumn(sectionObj, slideIdx, rowObj, col, idz) {
    let colObj = rowObj.cols[idz];
    if (colObj.actions) {
        this.actions.prepareElementAction(
            _.pick(colObj, ['type', 'component', 'data', 'actions'])
        );
    }
    if (colObj.type === ComponentType.LearningActivity) {
        let scormData = (<any>colObj.data).SCORM;
        let statement = (<any>colObj.data).statement;
        this.interactions.addInteraction({
            interactionId: ++this.interactionCount,
            type: scormData && scormData.type ? scormData.type : SCORMInteractionType.Choice,
            weight: scormData && scormData.weight ? scormData.weight : 1,
            description: statement ? statement : '',
            section: sectionObj.id,
            slide: slideIdx
        });
        
        col.setContent(colObj.component, _.extend(colObj.data, {
            interactionId: this.interactionCount,
            submitAction: this.actions.prepareSubmitAction(colObj.data),
            updateAction: this.actions.prepareUpdateAction()
        }));
    } else if (colObj.type === ComponentType.ContentOrganizer) {
      if (_.isObject(colObj.data) && _.has(colObj.data, 'rows')) {
        this.prepareInnerRowCols(colObj.data, sectionObj.id, slideIdx);
      } else if (Array.isArray(colObj.data) && _.some(colObj.data, d => d.rows)){
        colObj.data.forEach(d => {
          this.prepareInnerRowCols(d, sectionObj.id, slideIdx);
        });
      }
      col.setContent(colObj.component, colObj.data);
    } else {
      col.setContent(colObj.component, colObj.data);
    }

    if (colObj.style) {
      col.setStyle(colObj.style);
    }

    if(colObj.classes) {
      col.setClasses(colObj.classes);
    }
  }

  private prepareInnerRowCols(colObj, section, slide) {
    colObj.rows = colObj.rows.map(innerRowObj => {
      let innerRowFlex = innerRowObj.flex ? innerRowObj.flex : 1;
      let innerRow = new CourseRow(innerRowFlex);
      let innerColsObj = innerRowObj.cols;

      let doColsHaveFlexAssigned = _.some(innerColsObj, innerColObj => {
        return _.isInteger(innerColObj.flex);
      });
      let innerColsParam = doColsHaveFlexAssigned ? _.map(innerColsObj, innerColObj => {
          return _.isInteger(innerColObj.flex) ? innerColObj.flex : 1;
      }) : innerColsObj.length;

      innerRow.setCols(innerColsParam);

      if (innerRowObj.style) {
        innerRow.setStyle(innerRowObj.style);
      }

      if (innerRowObj.classes) {
        innerRow.setClasses(innerRowObj.classes);
      }

      innerRow.getCols().forEach((innerCol, innerIdx) => {
        let innerColObj = innerColsObj[innerIdx];
        if (innerColObj.actions) {
            this.actions.prepareElementAction(
                _.pick(innerColObj, ['type', 'component', 'data', 'actions'])
            );
        }
        if (innerColObj.type === ComponentType.LearningActivity) {
            let scormData = (<any>innerColObj.data).SCORM;
            let statement = (<any>innerColObj.data).statement;
            this.interactions.addInteraction({
                interactionId: ++this.interactionCount,
                type: scormData && scormData.type ? scormData.type : SCORMInteractionType.Choice,
                weight: scormData && scormData.weight ? scormData.weight : 1,
                description: statement ? statement : '',
                section: section,
                slide: slide
            });
            
            innerCol.setContent(innerColObj.component, _.extend(innerColObj.data, {
                interactionId: this.interactionCount,
                submitAction: this.actions.prepareSubmitAction(innerColObj.data),
                updateAction: this.actions.prepareUpdateAction()
            }));
        } else if (innerColObj.type === ComponentType.ContentOrganizer) {
          if (_.isObject(innerColObj.data) && _.has(innerColObj.data, 'rows')) {
            this.prepareInnerRowCols(innerColObj.data, section, slide);
          } else if (Array.isArray(colObj.data) && _.some(colObj.data, d => d.rows)){
            innerColObj.data.forEach(d => {
              this.prepareInnerRowCols(d, section, slide);
            });
          }
          innerCol.setContent(innerColObj.component, innerColObj.data);
        } else {
          innerCol.setContent(innerColObj.component, innerColObj.data);
        }
    
        if (innerColObj.style) {
          innerCol.setStyle(innerColObj.style);
        }
    
        if(innerColObj.classes) {
          innerCol.setClasses(innerColObj.classes);
        }
      });

      return innerRow;
    });
  }

}
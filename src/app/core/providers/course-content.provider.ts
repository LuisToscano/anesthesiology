import { Injectable } from '@angular/core';
import { courseContent } from '../../../course-content';
import { CourseSection } from '../classes/course-section.class';
import * as _ from "lodash";

@Injectable()
export class CourseContentProvider {
  courseSections : Array<CourseSection>;

  constructor() {
    this.courseSections = [];
  }

  init(){
    _.forEach(courseContent, section => {
        let newSection = new CourseSection(section.id, section.name, section.icon)
        .createSlides(section.slides.length);
        _.forEach(newSection.getSlides(), (slide, idx) => {
            let rows = _.find(section.slides[idx].rows, row => {
                return Number.isInteger(row.flex);
            }) ? _.map(section.slides[idx].rows, row => {
                return Number.isInteger(row.flex) ? row.flex : 1;
            }) : section.slides[idx].rows.length;
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
                    col.setContent(colData.component, colData.data);
                });
            });
        });
        this.courseSections.push(newSection);
    });
  }
}
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
        let newSection = new CourseSection(section.id, section.name).createSlides(section.slides.length);
        _.forEach(newSection.getSlides(), (slide, idx) => {
            slide.setRows(section.slides[idx].rows.length);
            _.forEach(slide.getRows(), (row, idy) => {
                row.setCols(section.slides[idx].rows[idy].cols.length);
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
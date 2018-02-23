import { Injectable } from '@angular/core';
import { CourseRow } from '../classes/course-row.class';
import { CourseColumn } from '../classes/course-column.class';
import { CourseSlide } from '../classes/course-slide.class';
import { ParagraphComponent } from '../../components/basic/paragraph/paragraph.component';
import { courseContent } from '../../../course-content';
import { CourseSection } from '../classes/course-section.class';
import * as _ from "lodash";

@Injectable()
export class CourseContentProvider {
  slides : Map<string, CourseSlide>;
  courseSections : Array<CourseSection>;

  constructor() {
    this.slides = new Map<string, CourseSlide>();
  }

  init(){
    _.forEach(courseContent, section => {
        let newSection = new CourseSection(section.name).createSlides(section.slides.length);
        _.forEach(newSection.getSlides(), (slide, idx) => {
            slide.setRows(section.slides[idx].rows.length);
            _.forEach(slide.getRows(), (row, idy) => {
                row.setCols(section.slides[idx].rows[idy].cols.length);
                _.forEach(row.getCols(), (col, idz) => {
                    let colData = section.slides[idx].rows[idy].cols[idz];
                    col.setContent(colData.component);
                });
            });
        });
        this.courseSections.push(newSection);
    });
  }

  slide(key : string){
    return this.slides.has(key) ? this.slides.get(key) : null; 
  }

  setSlide(key : string, value : CourseSlide) {
    this.slides.set(key, value);
  }
}

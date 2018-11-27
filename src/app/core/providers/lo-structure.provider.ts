import { Injectable } from '@angular/core';
import { CourseSection } from '../classes/course-section.class';
import * as _ from "lodash";

@Injectable()
export class LOStructureProvider {
  private sections : Array<CourseSection>;

  constructor() {
    this.sections = [];
  }

  addSection(section : CourseSection) {
    this.sections.push(section);
  }

  getSections() : Array<CourseSection> {
    return this.sections;
  }

  setSections(sections : Array<CourseSection>) {
      this.sections = sections;
  }
}
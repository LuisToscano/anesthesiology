import { Injectable } from '@angular/core';
import { CourseSection } from '../classes/course-section.class';
import { CourseSlide } from '../classes/course-slide.class';
import { CourseContentProvider } from './course-content.provider';
import * as _ from "lodash";

@Injectable()
export class NavigationProvider {
  current : NavPosition;
  constructor(private courseContent : CourseContentProvider) {}

  init() : void {
    let sections = this.courseContent.courseSections;
    this.current = sections.length > 0 ? {
        section: _.first(sections),
        slide: 0
    } : null;
  }

  getCurrentSlide() : CourseSlide {
    return this.current.section.slide(this.current.slide);
  }
}

interface NavPosition {
    section : CourseSection;
    slide : number;
}

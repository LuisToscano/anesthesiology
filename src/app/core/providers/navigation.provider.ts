import { Injectable } from '@angular/core';
import { CourseSection } from '../classes/course-section.class';
import { CourseSlide } from '../classes/course-slide.class';
import { CourseContentProvider } from './course-content.provider';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";

@Injectable()
export class NavigationProvider {
  private current : NavPosition;
  private lastCheckedPosition : NavPosition;
  slideChanged : Observable<NavPosition>;

  constructor(private courseContent : CourseContentProvider) {}

  init() : void {
    let sections = this.courseContent.courseSections;
    let firstSection = _.first(sections);
    this.current = sections.length > 0 ? {
        section: firstSection,
        slide: 0,
        totalSlides: firstSection.getSlides().length
    } : null;
    this.lastCheckedPosition = JSON.parse(JSON.stringify(this.current));

    this.slideChanged = new Observable(observer => {
        setInterval(() => { 
          if (!this.validateLastChecked()) {
          this.lastCheckedPosition = JSON.parse(JSON.stringify(this.current));
          observer.next(this.current);
        }}, 500);
    })
  }

  getCurrentPosition() : NavPosition {
    return this.current;
  }

  getCurrentSlide() : CourseSlide {
    return this.current.section.slide(this.current.slide);
  }

  nextSlide() {
    if (this.current.slide < (this.current.totalSlides - 1)) {
      this.current.slide = this.current.slide + 1;
    }
  }

  previousSlide() {
    if (this.current.slide > 0) {
      this.current.slide = this.current.slide - 1;
    }
  }

  private validateLastChecked() {
    return this.current.section === this.lastCheckedPosition.section &&
           this.current.slide === this.lastCheckedPosition.slide;
  }

  goToSection(id : string) {
    var desiredSection = _.find(this.courseContent.courseSections, section => {
      return section.getId() === id;
    });
    if (desiredSection) {
      this.current.section = desiredSection;
      this.current.slide =  0;
      this.current. totalSlides = desiredSection.getSlides().length;
    } else {
      console.error('The desired section does not exist');
    }
  }
}

export interface NavPosition {
  section : CourseSection;
  slide : number;
  totalSlides: number;
}
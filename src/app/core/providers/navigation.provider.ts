import { Injectable } from '@angular/core';
import { CourseSlide } from '../classes/course-slide.class';
import { LOStructureProvider } from './lo-structure.provider';
import { Observable } from 'rxjs/Observable';
import { NavPosition } from '../interfaces/nav-position.interface';
import { SCORMProvider } from './scorm.provider'; 
import * as _ from "lodash";
import { LocationSummary } from '../interfaces/location-summary.interface';

@Injectable()
export class NavigationProvider {
  private current : NavPosition;
  private lastCheckedPosition : LocationSummary;
  slideChanged : Observable<NavPosition>;

  constructor(
    private LOStructure : LOStructureProvider,
    private scorm : SCORMProvider
  ) {}

  init() : void {
    let sections = this.LOStructure.getSections();
    let firstSection = _.first(sections);
    let currentSCORM = this.scorm.getLocation();
    let defaultPosition = {
      section: firstSection,
      slide: 0,
      name: firstSection.slide(0).getName(),
      totalSlides: firstSection.getSlides().length
    };
    
    if (currentSCORM) {
      this.goToSectionSlide(currentSCORM.section, currentSCORM.slide);
    } else {
      this.current = defaultPosition;
    }

    this.lastCheckedPosition = this.buildLastCheckedPosition();

    this.slideChanged = new Observable(observer => {
        setInterval(() => {
          if (!this.validateLastChecked()) {
          this.lastCheckedPosition = this.buildLastCheckedPosition();
          observer.next(this.current);
        }}, 500);
    });
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
      this.current.name = this.getCurrentSlide().getName();
    }
  }

  previousSlide() {
    if (this.current.slide > 0) {
      this.current.slide = this.current.slide - 1;
      this.current.name = this.getCurrentSlide().getName();
    }
  }

  private buildLastCheckedPosition() {
    return JSON.parse(JSON.stringify({
      section: this.current.section.getId(),
      slide: this.current.slide
    }));
  }

  private validateLastChecked() {
    return this.current.section.getId() == this.lastCheckedPosition.section &&
           this.current.slide === this.lastCheckedPosition.slide;
  }

  goToSectionSlide(id : string, slide? : number) {
    var desiredSection = _.find(this.LOStructure.getSections(), section => {
      return section.getId() === id;
    });
    if (desiredSection) {
      this.current.section = desiredSection;
      this.current.slide =  slide ? slide : 0;
      this.current. totalSlides = desiredSection.getSlides().length;
      this.current.name = this.getCurrentSlide().getName();
    } else {
      console.error('The desired section does not exist');
    }
  }

  isFirstSlide() {
    return this.current.slide === 0;
  }

  isLastSlide() {
    return this.current.slide === (this.current.totalSlides - 1);
  }

  hasOnlyOneSlide() {
    return this.current.totalSlides === 1;
  }

  getSectionName() {
    return this.current.section.getName();
  }

  getSlideName() {
    return this.getCurrentSlide().getName();
  }
}
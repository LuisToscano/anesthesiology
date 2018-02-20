import { Injectable } from '@angular/core';
import { CourseRow } from '../classes/course-row.class';
import { CourseColumn } from '../classes/course-column.class';
import { Layout } from '../classes/layout.class';
import { ParagraphComponent } from '../../components/basic/paragraph/paragraph.component';

@Injectable()
export class CourseContentService {
  slides : Map<string, Layout>;
  constructor() {
    this.slides = new Map<string, Layout>();
  }

  slide(key : string){
    return this.slides.has(key) ? this.slides.get(key) : null; 
  }

  setSlide(key : string, value : Layout) {
    this.slides.set(key, value);
  }
}

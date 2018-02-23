import { CourseSlide } from './course-slide.class';
import * as _ from "lodash";

export class CourseSection {
    private name: string;
    private slides: Array<CourseSlide>;

    constructor(name: string){
      this.name = name;
      this.slides = [];
    }

    getSlides() {
        return this.slides;
    }

    slide(idx : number) : CourseSlide {
        return this.slides.length > idx ? this.slides[idx] : null; 
    }

    createSlides(amount : number) {
        _.range(amount).forEach(idx => {
            this.slides.push(new CourseSlide());
        });
        return this;
    }
}
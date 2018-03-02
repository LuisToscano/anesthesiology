import { CourseSlide } from './course-slide.class';
import * as _ from "lodash";

export class CourseSection {
    private id: string;
    private name: string;
    private slides: Array<CourseSlide>;

    constructor(id: string, name: string){
      this.id = id;
      this.name = name;
      this.slides = [];
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
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
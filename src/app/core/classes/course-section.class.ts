import { CourseSlide } from './course-slide.class';
import * as _ from "lodash";

export class CourseSection {
    private id: string;
    private name: string;
    private icon: string;
    private slides: Array<CourseSlide>;

    constructor(id: string, name: string, icon ?: string){
      this.id = id;
      this.name = name;
      this.icon = icon;
      this.slides = [];
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getIcon() {
        return this.icon;
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
import { CourseSection } from '../classes/course-section.class';

export interface NavPosition{
    section : CourseSection;
    slide : number;
    totalSlides: number;
}
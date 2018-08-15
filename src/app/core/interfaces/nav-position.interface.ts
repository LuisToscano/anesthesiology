import { CourseSection } from '../classes/course-section.class';

export interface NavPosition{
    section : CourseSection;
    slide : number;
    name : string;
    totalSlides: number;
}
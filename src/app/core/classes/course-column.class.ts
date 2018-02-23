import { CourseRow } from './course-row.class';

export class CourseColumn{
    private component : any;
    private flex : number;

    constructor(flex? : number) {
        this.flex = flex ? flex : null;
    }

    setContent(component : any, styles? : string[]) {
        this.component = component;
    }
}
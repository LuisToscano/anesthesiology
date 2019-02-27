import { CourseColumn } from './course-column.class';
import * as _ from "lodash";

export class CourseRow {
    private cols : CourseColumn[];
    private flex : number | string;
    private style;
    private classes;

    constructor(flex? : number) {
        this.cols = [];
        this.flex = flex === 0 ? 'none' : flex;
        this.style = {};
        this.classes = [];
    }

    getCols() {
        return this.cols;
    }

    setCols(colsParam : number[] | number) {
        Array.isArray(colsParam) ?
        _.each(colsParam, flexIdx => this.cols.push(new CourseColumn(flexIdx))) :
        _.times(colsParam, () => this.cols.push(new CourseColumn(1)));
        return this;
    }

    setColArray(cols : Array<CourseColumn>) {
        this.cols = cols;
    }

    col(idx : number) {
        return this.cols.length > idx ? this.cols[idx] : null;
    }

    getStyle() {
        return this.style;
    }

    setStyle(style : {}){
        this.style = style;
    }

    getClasses() {
        return this.classes;
    }

    setClasses(classes : {}){
        this.classes = classes;
    }
}
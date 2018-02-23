import { CourseColumn } from './course-column.class';
import * as _ from "lodash";

export class CourseRow {
    private cols : CourseColumn[];
    private flex : number;

    constructor(flex? : number) {
        this.cols = [];
        this.flex = flex ? flex : null;
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

    col(idx : number) {
        return this.cols.length > idx ? this.cols[idx] : null;
    }
}
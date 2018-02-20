import { CourseColumn } from './course-column.class';
import * as _ from "lodash";

export class CourseRow {
    cols : CourseColumn[];
    flex : number;

    constructor(flex? : number) {
        this.cols = [];
        this.flex = flex ? flex : null;
    }

    setCols(proportions : number[], amount? : number) {
        amount ? _.times(amount, () => this.cols.push(new CourseColumn(1))) :
      _.each(proportions, flex => this.cols.push(new CourseColumn(flex)))
    }

    col(idx : number) {
        return this.cols.length > idx ? this.cols[idx] : null;
    }
}
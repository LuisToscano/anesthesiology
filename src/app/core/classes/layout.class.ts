import { CourseRow } from './course-row.class';
import * as _ from "lodash";

export class Layout{
    rows: CourseRow[]

    constructor(){
      this.rows = [];
    }

    setRows(proportions: number[], amount? : number) {
      amount ? _.times(amount, () => this.rows.push(new CourseRow(1))) :
      _.each(proportions, flex => this.rows.push(new CourseRow(flex)))
    }

    row(idx : number) : CourseRow {
        return this.rows.length > idx ? this.rows[idx] : null; 
    }
}
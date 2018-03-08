import { CourseRow } from './course-row.class';
import * as _ from "lodash";

export class CourseSlide{
    private rows: CourseRow[]
    private style: {};

    constructor(){
      this.rows = [];
    }

    getRows() {
      return this.rows;
    }

    getStyle() {
      return this.style;
    }

    setStyle(style : {}){
      this.style = style;
    }

    setRows(rowsParam : Array<number> | number) {
     Array.isArray(rowsParam) ?
     _.each(rowsParam, flex => this.rows.push(new CourseRow(flex))) : 
     _.times(rowsParam, () => this.rows.push(new CourseRow(1)))
      return this;
    }

    row(idx : number) : CourseRow {
        return this.rows.length > idx ? this.rows[idx] : null; 
    }
}
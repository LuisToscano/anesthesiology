import { CourseRow } from './course-row.class';
import * as _ from "lodash";

export class CourseSlide{
    private name : string;
    private rows : CourseRow[];
    private style : {};
    private classes : Array<string>;
    
    constructor(){
      this.rows = [];
      this.classes = [];
    }

    getName() {
      return this.name;
    }

    getRows() {
      return this.rows;
    }

    getStyle() {
      return this.style;
    }

    getClasses() {
        return this.classes;
    }

    setStyle(style : {}){
      this.style = style;
    }

    setName(name : string) {
      this.name = name;
    }

    setClasses(classes : Array<string>){
      this.classes = classes;
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
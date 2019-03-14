import { Component, OnInit, Input } from '@angular/core';
import { CourseRow } from '../../../classes/course-row.class';
import { CourseColumn } from '../../../classes/course-column.class';
import * as _ from "lodash";

@Component({
  selector: 'simple-container',
  templateUrl: './simple-container.component.html',
  styleUrls: ['./simple-container.component.scss']
})
export class SimpleContainerComponent implements OnInit {
  
  data : Array<any>;
  sections : any;
  current : any;
  
  constructor() {}

  ngOnInit() {
    this.prepareData();
  }

  private prepareData() {
    this.sections = _.map(this.data, section => {
      return {
        name: section.name,
        rows: section.rows ? _.map(section.rows, row => {
          let newRow = new CourseRow(row.flex ? row.flex : 1);
          newRow.setColArray(_.map((row as any).cols, col => {
            let mapcol = new CourseColumn(col.flex ? col.flex : 1);
            mapcol.setContent((col as any).component, (col as any).data);
            if (col.style) {
              mapcol.setStyle(col.style);
            }
            if (col.classes) { 
              mapcol.setClasses(col.classes)
            }
            return mapcol;
          }));
          if (row.style) {
            newRow.setStyle(row.style);
          }
          if (row.classes) { 
            newRow.setClasses(row.classes)
          }
          return newRow;
        }) : []
      } 
    });
    if (this.sections.length > 0) {
      this.current = _.head(this.sections);
    }
  }
}

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
    if (Array.isArray(this.data) && this.data.length > 0) {
      let areRowsFormatted = _.every(this.data, section => {
        return _.every(section.rows, row => {
          return (row instanceof CourseRow);
        });
      });

      if (areRowsFormatted) {
        this.sections = _.map(this.data, section => {
          return {
            name: section.name,
            rows: section.rows ? section.rows : []
          };
        });
      } else {
        this.formatSections();
      }

      this.current = _.head(this.sections);
    }
  }

  private formatSections() {
    this.sections = _.map(this.data, section => {
      return {
        name: section.name,
        rows: section.rows ? _.map(section.rows, row => {
          let newRow = new CourseRow(row.flex ? row.flex : 1);
          newRow.setColArray(_.map((row as any).cols, col => {
            let mapcol = new CourseColumn(col.flex ? col.flex : 1);
            mapcol.setContent((col as any).component, (col as any).data);
            if (col.classes) {
              mapcol.setClasses(col.classes);
            }
            if (col.style) {
              mapcol.setStyle(col.style);
            }
            return mapcol;
          }));
          if (row.classes) {
            newRow.setClasses(row.classes);
          }
          if (row.style) {
            newRow.setStyle(row.style);
          }
          return newRow;
        }) : []
      } 
    });
  }
}

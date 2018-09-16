import { Component, OnInit, Input } from '@angular/core';
import { CourseRow } from '../../../classes/course-row.class';
import { CourseColumn } from '../../../classes/course-column.class';
import * as _ from "lodash";

@Component({
  selector: 'test-organizer',
  templateUrl: './test-organizer.component.html',
  styleUrls: ['./test-organizer.component.scss']
})
export class TestOrganizerComponent implements OnInit {

  example : Array<any>;
  data : Array<any>;
  sections : any;
  current : any;
  currentIdx : number;

  constructor() {
  }

  ngOnInit() {
      this.prepareData();
  }

  goTo(idx : number) {
    if (idx !== this.currentIdx) {
      this.current = this.sections[idx];
      this.currentIdx = idx;
    }
  }

  private prepareData() {
    this.sections = _.map(this.data, section => {
      return {
        name: section.name,
        rows: section.rows ? _.map(section.rows, row => {
          let newRow = new CourseRow(1);
          newRow.setColArray(_.map((row as any).cols, col => {
            let mapcol = new CourseColumn(1);
            mapcol.setContent((col as any).component, (col as any).data);
            return mapcol;
          }));
          return newRow;
        }) : []
      } 
    });
    if (this.sections.length > 0) {
      this.current = _.head(this.sections);
      this.currentIdx = 0;
    }
  }
}
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
        rows: section.rows ? section.rows : []
      };
    });
    if (this.sections.length > 0) {
      this.current = _.head(this.sections);
    }
  }
}

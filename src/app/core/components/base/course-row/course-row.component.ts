import { Component, Input, OnChanges } from '@angular/core';
import { CourseColumn } from '../../../classes/course-column.class';

@Component({
  selector: 'course-row',
  templateUrl: './course-row.component.html',
  styleUrls: ['./course-row.component.scss']
})
export class CourseRowComponent implements OnChanges{
  @Input() LOCurrentState : any;
  @Input() cols: CourseColumn[];

  colArray : CourseColumn[];

  constructor() {

  }

  ngOnChanges(changes : any) {
    if (changes && changes.cols && changes.cols.currentValue) {
      this.colArray = this.cols;
    }
  }

}
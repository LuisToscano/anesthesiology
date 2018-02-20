import { Component, Input } from '@angular/core';
import { CourseColumn } from '../../../core/classes/course-column.class';

@Component({
  selector: 'course-row',
  templateUrl: './course-row.component.html',
  styleUrls: ['./course-row.component.scss']
})
export class CourseRowComponent{

  @Input() cols: CourseColumn[];
  constructor() {}

}
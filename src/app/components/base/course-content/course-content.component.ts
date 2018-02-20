import { Component, Input, OnInit } from '@angular/core';
import {CourseRow} from '../../../core/classes/course-row.class';
import { CourseContentService } from '../../../core/services/course-content.service';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit{

  rows: CourseRow[];
  courseContent : CourseContentService;
  @Input() position: string;

  constructor(private courseContentProvider : CourseContentService) {
    this.rows = [];
    this.courseContent = courseContentProvider;
  }

  ngOnInit(){
    this.rows = this.courseContent.slide(this.position) !== null ?
                this.courseContent.slide(this.position).rows : [];
  }

}

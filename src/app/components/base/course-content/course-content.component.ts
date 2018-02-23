import { Component, Input, OnInit } from '@angular/core';
import {CourseRow} from '../../../core/classes/course-row.class';
import { Layout } from '../../../core/classes/layout.class';
import { CourseContentProvider } from '../../../core/providers/course-content.provider';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit{

  rows: CourseRow[];
  slideContent : Layout;
  @Input() position: string;

  constructor(private courseContentProvider : CourseContentProvider) {
    this.rows = [];
    this.slideContent = courseContentProvider.slide('1-1');
  }

  ngOnInit(){
    console.log(this.slideContent);
    this.rows = this.slideContent.rows;
  }

}

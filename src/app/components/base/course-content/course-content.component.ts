import { Component, Input, OnInit } from '@angular/core';
import { NavPosition } from '../../../core/interfaces/nav-position.interface';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit{
  @Input() navPosition: NavPosition;
  slideStyle : {};

  constructor() {}

  ngOnInit(){}

  getRows() {
    return this.navPosition.section.slide(this.navPosition.slide).getRows();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NavPosition } from '../../../interfaces/nav-position.interface';

@Component({
  selector: 'base-course-container',
  templateUrl: './base-course-container.component.html',
  styleUrls: ['./base-course-container.component.scss']
})
export class BaseCourseContainerComponent implements OnInit {
  
  @Input() navPosition : NavPosition;
  constructor() {}

  ngOnInit() {
  }

  getSlideStyle() {
    return this.navPosition.section.slide(this.navPosition.slide).getStyle();
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-course-container',
  templateUrl: './base-course-container.component.html',
  styleUrls: ['./base-course-container.component.scss']
})
export class BaseCourseContainerComponent implements OnInit {
  
  @Input() LOCurrentState : any;
  constructor() {}

  ngOnInit() {
  }

  getSlideStyle() {
    return this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getStyle();
  }
}

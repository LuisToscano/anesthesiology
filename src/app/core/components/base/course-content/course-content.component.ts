import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent{
  @Input() LOCurrentState : any;

  constructor() {}

  getRows() {
    return this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getRows();
  }
}

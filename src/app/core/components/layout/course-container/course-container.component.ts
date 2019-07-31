import { Component, Input } from '@angular/core';

@Component({
  selector: 'lo-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent{
  
  @Input() LOCurrentState : any;
  constructor() {}

  getSlideStyle() {
    const position = this.LOCurrentState.position
    return position.section.slide(position.slide).getStyle();
  }
}

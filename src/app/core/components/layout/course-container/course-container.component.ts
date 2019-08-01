import { Component, Input } from '@angular/core';

@Component({
  selector: 'lo-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent{
  
  @Input() LOCurrentState : any;
  @Input() innerNavBarData : any;
  constructor() {}

  getSlideStyle() {
    const position = this.LOCurrentState.position;
    return position.section.slide(position.slide).getStyle();
  }

  getContentClasses() {
    let sectionId = this.LOCurrentState.position.section.getId();
    let slideClasses = Array.from(this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getClasses());

    slideClasses.unshift(sectionId);

    return slideClasses;
  }
}

import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnChanges{
  @Input() LOCurrentState : any;
  rows : Array<any>;

  constructor() {}

  ngOnChanges() {
    this.rows = this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getRows();
  }
}

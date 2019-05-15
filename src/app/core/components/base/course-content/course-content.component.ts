import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit{
  @Input() LOCurrentState : any;

  constructor() {}

  ngOnInit(){}

  getRows() {
    return this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getRows();
  }

  a() {
    console.log('opened');
  }
}

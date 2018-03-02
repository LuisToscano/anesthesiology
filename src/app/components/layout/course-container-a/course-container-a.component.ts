import { Component, OnInit, Input } from '@angular/core';
import { NavPosition } from '../../../core/providers/navigation.provider';

@Component({
  selector: 'course-container-a',
  templateUrl: './course-container-a.component.html',
  styleUrls: ['./course-container-a.component.scss']
})
export class CourseContainerAComponent implements OnInit {
  
  @Input() navPosition : NavPosition;
  constructor() {}

  ngOnInit() {}
}

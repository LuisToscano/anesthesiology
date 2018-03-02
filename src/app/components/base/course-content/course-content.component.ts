import { Component, Input, OnInit } from '@angular/core';
import { CourseRow} from '../../../core/classes/course-row.class';
import { CourseSlide } from '../../../core/classes/course-slide.class';
import { NavigationProvider, NavPosition } from '../../../core/providers/navigation.provider';

@Component({
  selector: 'course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit{
  @Input() navPosition: NavPosition;

  constructor(private navigation : NavigationProvider) {}

  ngOnInit(){}

  getRows() {
    return this.navPosition.section.slide(this.navPosition.slide).getRows();
  }
}

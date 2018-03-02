import { Component, OnInit, Input } from '@angular/core';
import { NavPosition } from '../../core/providers/navigation.provider';
import { CourseInfo } from '../../../course.info';
import { CourseContentProvider } from '../../core/providers/course-content.provider';
import { MenuBarElement } from '../../core/interfaces/menu-bar-element.interface';

@Component({
  selector: 'layout-demo',
  templateUrl: './layout-demo.component.html',
  styleUrls: ['./layout-demo.scss']
})
export class LayoutDemoComponent implements OnInit {

  @Input() navPosition : NavPosition;
  @Input() topMenuBar : Array<MenuBarElement>;
  courseInfo : any;

  constructor(courseContent : CourseContentProvider) {
    this.courseInfo = CourseInfo;
  }

  ngOnInit() {
  }

}

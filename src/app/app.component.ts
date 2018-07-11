import { Component, OnInit } from '@angular/core';
import { CourseContentProvider } from './core/providers/course-content.provider';
import { CourseExtrasProvider } from './core/providers/course-extras.provider';
import { NavigationProvider } from './core/providers/navigation.provider';
import { SCORMProvider } from './core/providers/scorm.provider';
import { NavPosition } from './core/interfaces/nav-position.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  navPosition : NavPosition;

  constructor(
    private courseContent : CourseContentProvider,
    private courseExtras : CourseExtrasProvider,
    private navigation : NavigationProvider,
    private scorm : SCORMProvider
  ) { }

  ngOnInit(){
    this.courseContent.init();
    this.navigation.init();
    this.scorm.init();
    this.navPosition = this.navigation.getCurrentPosition();
    this.navigation.slideChanged.subscribe(this.currentSlideChanged.bind(this));
  }

  private currentSlideChanged(navPos : NavPosition) {
    this.navPosition = navPos;
  }
}
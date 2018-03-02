import { Component, OnInit } from '@angular/core';
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { CourseContentProvider } from './core/providers/course-content.provider';
import { CourseExtrasProvider } from './core/providers/course-extras.provider';
import { NavigationProvider, NavPosition } from './core/providers/navigation.provider';
import { CourseSlide } from './core/classes/course-slide.class';
import { courseContentExtras } from '../course-content';
import { MenuBarElement } from './core/interfaces/menu-bar-element.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  navPosition : NavPosition;
  topMenuBar : Array<MenuBarElement>;
  bottomMenuBar : Array<MenuBarElement>;

  constructor(
    private courseContent : CourseContentProvider,
    private courseExtras : CourseExtrasProvider,
    private navigation : NavigationProvider
  ) { }

  ngOnInit(){
    this.courseContent.init();
    this.navigation.init();
    this.navPosition = this.navigation.getCurrentPosition();
    this.navigation.slideChanged.subscribe(this.currentSlideChanged.bind(this));
    this.topMenuBar = this.courseExtras.createMenuBarElementsArray(
      (courseContentExtras as any).menuBars.top);
  }

  private currentSlideChanged(navPos : NavPosition) {
    this.navPosition = navPos;
  }
}
import { Component, OnInit } from '@angular/core';
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { CourseContentProvider } from './core/providers/course-content.provider';
import { NavigationProvider } from './core/providers/navigation.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(
    private courseContent : CourseContentProvider,
    private navigation : NavigationProvider
  ) { }

  ngOnInit(){
    this.courseContent.init();
    this.navigation.init();
  }
}

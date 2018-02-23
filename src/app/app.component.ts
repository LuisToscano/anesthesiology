import { Component, OnInit } from '@angular/core';
import { CourseRow } from './core/classes/course-row.class';
import { CourseColumn } from './core/classes/course-column.class';
import { Layout } from './core/classes/layout.class';
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { CourseContentProvider } from './core/providers/course-content.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private courseContent : CourseContentProvider) { }

  ngOnInit(){
    let layout = new Layout();
    layout.setRows([1, 2]);
    layout.row(0).setCols([1]);
    layout.row(0).col(0).setContent(ParagraphComponent);
    layout.row(1).setCols([1,5]);
    layout.row(1).col(0).setContent(ParagraphComponent);
    layout.row(1).col(1).setContent(ParagraphComponent);
    this.courseContent.setSlide('1-1', layout);
  }
}

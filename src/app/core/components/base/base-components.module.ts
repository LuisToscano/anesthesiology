// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//BASE
import { ColumnContentComponent } from './course-column/column-content.component';
import { CourseColumnComponent } from './course-column/course-column.component';
import { CourseRowComponent } from './course-row/course-row.component';
import { CourseContentComponent } from './course-content/course-content.component';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseRowComponent,
    CourseContentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseRowComponent,
    CourseContentComponent
  ],
  entryComponents: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseRowComponent,
    CourseContentComponent
  ]
})
export class BaseComponentsModule { }
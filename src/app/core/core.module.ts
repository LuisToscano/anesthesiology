// imports
import { NgModule } from '@angular/core';
import { CourseColumnComponent } from './components/base/course-column/course-column.component';
import { ColumnContentComponent } from './components/base/course-column/column-content.component';
import { CourseContentComponent } from './components/base/course-content/course-content.component';
import { CourseRowComponent } from './components/base/course-row/course-row.component';
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { BaseCourseContainerComponent } from './components/layout/base-course-container/base-course-container.component';
import { CourseContentProvider } from './providers/course-content.provider';
import { CourseExtrasProvider } from './providers/course-extras.provider';
import { NavigationProvider } from './providers/navigation.provider';
import { SideMenuProvider } from './providers/side-menu.provider';
import { SCORMProvider } from './providers/scorm.provider';
import { StateProvider } from './providers/state.provider';
import { BrowserModule } from '@angular/platform-browser';
import { FormQuestionComponent } from './components/learning-activities/form-question/form-question.component';
import { FormsModule } from '@angular/forms';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    FormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseContentProvider,
    CourseExtrasProvider,
    NavigationProvider,
    SideMenuProvider,
    SCORMProvider,
    StateProvider
  ],
  exports: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    FormQuestionComponent
  ],
  entryComponents: [
    ParagraphComponent,
    FormQuestionComponent
  ]
})
export class CoreModule { }
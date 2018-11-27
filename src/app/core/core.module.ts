// imports
import { NgModule } from '@angular/core';
import { CourseColumnComponent } from './components/base/course-column/course-column.component';
import { ColumnContentComponent } from './components/base/course-column/column-content.component';
import { CourseContentComponent } from './components/base/course-content/course-content.component';
import { CourseRowComponent } from './components/base/course-row/course-row.component';
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { TitleComponent } from './components/basic/title/title.component';
import { ButtonComponent } from './components/basic/button/button.component';
import { BaseCourseContainerComponent } from './components/layout/base-course-container/base-course-container.component';
import { CourseContentProvider } from './providers/course-content.provider';
import { NavigationProvider } from './providers/navigation.provider';
import { SideMenuProvider } from './providers/side-menu.provider';
import { SCORMProvider } from './providers/scorm.provider';
import { StateProvider } from './providers/state.provider';
import { ActionsProvider } from './providers/actions.provider';
import { LOStructureProvider } from './providers/lo-structure.provider';
import { InteractionsProvider } from './providers/interactions.provider';
import { BrowserModule } from '@angular/platform-browser';
import { FormQuestionComponent } from './components/learning-activities/form-question/form-question.component';
import { TestOrganizerComponent } from './components/content-organizers/test-organizer/test-organizer.component';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    FormQuestionComponent,
    TestOrganizerComponent,
    SafeHtmlPipe,
    TitleComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseContentProvider,
    NavigationProvider,
    SideMenuProvider,
    SCORMProvider,
    StateProvider,
    ActionsProvider,
    LOStructureProvider,
    InteractionsProvider
  ],
  exports: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    FormQuestionComponent,
    TestOrganizerComponent,
    TitleComponent,
    ButtonComponent
  ],
  entryComponents: [
    ParagraphComponent,
    FormQuestionComponent,
    TestOrganizerComponent,
    TitleComponent,
    ButtonComponent
  ]
})
export class CoreModule { }
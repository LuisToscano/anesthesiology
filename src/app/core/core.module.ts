// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

//BASE
import { CourseColumnComponent } from './components/base/course-column/course-column.component';
import { ColumnContentComponent } from './components/base/course-column/column-content.component';
import { CourseContentComponent } from './components/base/course-content/course-content.component';
import { CourseRowComponent } from './components/base/course-row/course-row.component';

//BASIC
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { TitleComponent } from './components/basic/title/title.component';
import { ImgComponent } from './components/basic/img/img.component';
import { ButtonComponent } from './components/basic/button/button.component';
import { VoidComponent } from './components/basic/void/void.component';
import { BaseCourseContainerComponent } from './components/layout/base-course-container/base-course-container.component';

//PROVIDERS
import { CourseContentProvider } from './providers/course-content.provider';
import { NavigationProvider } from './providers/navigation.provider';
import { SideMenuProvider } from './providers/side-menu.provider';
import { SCORMProvider } from './providers/scorm.provider';
import { StateProvider } from './providers/state.provider';
import { ActionsProvider } from './providers/actions.provider';
import { LOStructureProvider } from './providers/lo-structure.provider';
import { InteractionsProvider } from './providers/interactions.provider';

//LEARNING ACTIVITIES
import { FormQuestionComponent } from './components/learning-activities/form-question/form-question.component';
import { PhysicsFunctionQuestionComponent } from './components/learning-activities/physics-function-question/physics-function-question.component';

//CONTENT ORGANIZERS
import { TestOrganizerComponent } from './components/content-organizers/test-organizer/test-organizer.component';
import { IntroSlideShowComponent } from './components/content-organizers/intro-slideshow/intro-slideshow.component';
import { SimpleContainerComponent } from './components/content-organizers/simple-container/simple-container.component';

//LAYOUT
import { NavigationSideBtnsComponent } from './components/layout/navigations-side-btns/navigation-side-btns.component';
import { FloatingBtnComponent } from './components/layout/floating-btn/floating-btn.component';

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
    PhysicsFunctionQuestionComponent,
    TestOrganizerComponent,
    IntroSlideShowComponent,
    SafeHtmlPipe,
    TitleComponent,
    ImgComponent,
    ButtonComponent,
    NavigationSideBtnsComponent,
    VoidComponent,
    FloatingBtnComponent,
    SimpleContainerComponent
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
    PhysicsFunctionQuestionComponent,
    TestOrganizerComponent,
    IntroSlideShowComponent,
    TitleComponent,
    ImgComponent,
    ButtonComponent,
    NavigationSideBtnsComponent,
    VoidComponent,
    FloatingBtnComponent,
    SimpleContainerComponent
  ],
  entryComponents: [
    ParagraphComponent,
    FormQuestionComponent,
    PhysicsFunctionQuestionComponent,
    TestOrganizerComponent,
    IntroSlideShowComponent,
    TitleComponent,
    ImgComponent,
    ButtonComponent,
    NavigationSideBtnsComponent,
    VoidComponent,
    FloatingBtnComponent,
    SimpleContainerComponent
  ]
})
export class CoreModule { }
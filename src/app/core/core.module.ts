// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { HttpModule } from '@angular/http';

//BASE
import { CourseColumnComponent } from './components/base/course-column/course-column.component';
import { ColumnContentComponent } from './components/base/course-column/column-content.component';
import { CourseContentComponent } from './components/base/course-content/course-content.component';
import { CourseRowComponent } from './components/base/course-row/course-row.component';

//BASIC
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';
import { TitleComponent } from './components/basic/title/title.component';
import { ListComponent } from './components/basic/list/list.component';
import { ImgComponent } from './components/basic/img/img.component';
import { ButtonComponent } from './components/basic/button/button.component';
import { VoidComponent } from './components/basic/void/void.component';
import { LinkComponent } from "./components/basic/link/link.component";
import { DownloadComponent } from "./components/basic/download/download.component";
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
import { ModalProvider } from './providers/modal-provider';

//LEARNING ACTIVITIES

//CONTENT ORGANIZERS
import { SimpleContainerComponent } from "./components/content-organizers/simple-container/simple-container.component";
import { CharacterDialogComponent } from "./components/content-organizers/character-dialog/character-dialog.component";

//LAYOUT
import { MainHeaderComponent } from "./components/layout/main-header/main-header.component";
import { BreadcrumbComponent } from "./components/layout/breadcrumb/breadcrumb.component";
import { NavBarComponent } from "./components/layout/nav-bar/nav-bar.component";
import { CourseContainerComponent } from "./components/layout/course-container/course-container.component";
import { InnerNavBarComponent } from "./components/layout/inner-nav-bar/inner-nav-bar.component";
import { SecondaryNavBarComponent } from "./components/layout/secondary-nav-bar/secondary-nav-bar.component";
import { CopyrightComponent } from "./components/layout/copyright/copyright.component";
import { LOModalComponent } from "./components/layout/lo-modal/lo-modal.component";

//DIRECTIVES

import { ModalsModule } from './components/layout/modals/modals.module';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    SafeHtmlPipe,
    TitleComponent,
    ListComponent,
    ImgComponent,
    ButtonComponent,
    VoidComponent,
    MainHeaderComponent,
    BreadcrumbComponent,
    NavBarComponent,
    InnerNavBarComponent,
    CourseContainerComponent,
    SecondaryNavBarComponent,
    CopyrightComponent,
    LOModalComponent,
    SimpleContainerComponent,
    CharacterDialogComponent,
    LinkComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalsModule
  ],
  providers: [
    CourseContentProvider,
    NavigationProvider,
    SideMenuProvider,
    SCORMProvider,
    StateProvider,
    ActionsProvider,
    LOStructureProvider,
    InteractionsProvider,
    ModalProvider
  ],
  exports: [
    ColumnContentComponent,
    CourseColumnComponent,
    CourseContentComponent,
    CourseRowComponent,
    ParagraphComponent,
    BaseCourseContainerComponent,
    TitleComponent,
    ListComponent,
    ImgComponent,
    ButtonComponent,
    VoidComponent,
    MainHeaderComponent,
    BreadcrumbComponent,
    NavBarComponent,
    InnerNavBarComponent,
    CourseContainerComponent,
    SecondaryNavBarComponent,
    CopyrightComponent,
    LOModalComponent,
    SimpleContainerComponent,
    CharacterDialogComponent,
    LinkComponent,
    DownloadComponent
  ],
  entryComponents: [
    ParagraphComponent,
    TitleComponent,
    ListComponent,
    ImgComponent,
    ButtonComponent,
    VoidComponent,
    MainHeaderComponent,
    BreadcrumbComponent,
    NavBarComponent,
    InnerNavBarComponent,
    CourseContainerComponent,
    SecondaryNavBarComponent,
    CopyrightComponent,
    LOModalComponent,
    SimpleContainerComponent,
    CharacterDialogComponent,
    LinkComponent,
    DownloadComponent
  ]
})
export class CoreModule { }
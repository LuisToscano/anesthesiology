import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Layout
import { LayoutDemoComponent } from './layouts/layout-demo/layout-demo.component';

//base components
import { CourseColumnComponent } from './components/base/course-column/course-column.component';
import { CourseRowComponent } from './components/base/course-row/course-row.component';
import { CourseContentComponent } from './components/base/course-content/course-content.component';
import { ColumnContentComponent } from './components/base/course-column/column-content.component';

//basic components
import { ParagraphComponent } from './components/basic/paragraph/paragraph.component';

//layout components
import { HeaderRowComponent } from './components/layout/header-row/header-row.component';
import { SideMenuColumnComponent } from './components/layout/side-menu-column/side-menu-column.component';
import { BannerUnalAComponent } from './components/layout/banner-unal-a/banner-unal-a.component';
import { CourseBreadcrumbAComponent } from './components/layout/course-breadcrumb-a/course-breadcrumb-a.component';
import { MenuBarAComponent } from './components/layout/menu-bar-a/menu-bar-a.component';
import { MenuBarBComponent } from './components/layout/menu-bar-b/menu-bar-b.component';
import { CourseContainerAComponent } from './components/layout/course-container-a/course-container-a.component';
import { CopyrightBarAComponent } from './components/layout/copyright-bar-a/copyright-bar-a.component';

//services
import { CourseContentService } from './core/services/course-content.service';
import { SideMenuService } from './core/services/side-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseColumnComponent,
    CourseRowComponent,
    CourseContentComponent,
    ParagraphComponent,
    ColumnContentComponent,
    LayoutDemoComponent,
    HeaderRowComponent,
    SideMenuColumnComponent,
    BannerUnalAComponent,
    CourseBreadcrumbAComponent,
    MenuBarAComponent,
    MenuBarBComponent,
    CourseContainerAComponent,
    CopyrightBarAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CourseContentService, SideMenuService],
  bootstrap: [AppComponent],
  entryComponents: [
    ParagraphComponent
  ]
})
export class AppModule { }

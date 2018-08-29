// imports
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { DemoLayoutComponent } from './demo-layout.component';
import { DemoLayoutHeaderComponent } from './components/demo-layout-header/demo-layout-header.component';
import { DemoLayoutNavBarComponent } from './components/demo-layout-nav-bar/demo-layout-nav-bar.component';
import { DemoLayoutFooterComponent } from './components/demo-layout-footer/demo-layout-footer.component';
import { CommonModule } from '@angular/common';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    DemoLayoutComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent,
    DemoLayoutFooterComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [
  ],
  exports: [
    DemoLayoutComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent,
    DemoLayoutFooterComponent
  ],
  entryComponents: [
    DemoLayoutComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent,
    DemoLayoutFooterComponent
  ]
})
export class DemoLayoutModule { }
// imports
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { DemoLayoutComponent } from './demo-layout.component';
import { DemoLayoutHeaderComponent } from './components/demo-layout-header/demo-layout-header.component';
import { DemoLayoutNavBarComponent } from './components/demo-layout-nav-bar/demo-layout-nav-bar.component';
import { CommonModule } from '@angular/common';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    DemoLayoutComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent
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
    DemoLayoutNavBarComponent
  ],
  entryComponents: [
    DemoLayoutComponent,
    DemoLayoutHeaderComponent,
    DemoLayoutNavBarComponent
  ]
})
export class DemoLayoutModule { }
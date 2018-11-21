// imports
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [
  ],
  exports: [
    LayoutComponent
  ],
  entryComponents: [
    LayoutComponent
  ]
})
export class LayoutModule { }
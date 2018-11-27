import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'column-content',
  template: ''
})
export class ColumnContentComponent {
   LOState : any;
   constructor(public viewContainerRef: ViewContainerRef) { }
} 
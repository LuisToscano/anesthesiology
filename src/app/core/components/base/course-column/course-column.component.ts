import { Component, Input, ViewChild, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { ColumnContentComponent } from './column-content.component';
import { ColumnContent } from '../../../interfaces/column-content.interface';
import * as _ from "lodash";

@Component({
  selector: 'course-column',
  templateUrl: './course-column.component.html',
  styleUrls: ['./course-column.component.scss']
})
export class CourseColumnComponent implements AfterContentInit {
  @Input() LOCurrentState : any;
  @Input() componentInner: any;
  @ViewChild(ColumnContentComponent) columnContent: ColumnContentComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentInner.component);
    let viewContainerRef = this.columnContent.viewContainerRef;
    this.columnContent.LOState = this.LOCurrentState;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ColumnContent>componentRef.instance).data = _.extend(this.componentInner.data, {
      LOCurrentState: this.LOCurrentState
    });
  }
}

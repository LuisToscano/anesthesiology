import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ColumnContentComponent } from './column-content.component';
import { ColumnContent } from '../../../core/interfaces/column-content.interface';

@Component({
  selector: 'course-column',
  templateUrl: './course-column.component.html',
  styleUrls: ['./course-column.component.scss']
})
export class CourseColumnComponent implements AfterViewInit {
  
  @Input() component: any;
  @ViewChild(ColumnContentComponent) columnContent: ColumnContentComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    let viewContainerRef = this.columnContent.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<ColumnContent>componentRef.instance).data = {};
  }
}

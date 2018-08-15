import { Component, OnInit, Input } from '@angular/core';
import { NavPosition } from '../../core/interfaces/nav-position.interface';
import { LOExtras } from '../lo.extras';

@Component({
  selector: 'demo-layout',
  templateUrl: './demo-layout.component.html',
  styleUrls: ['./demo-layout.component.scss']
})
export class DemoLayoutComponent implements OnInit {
  
  @Input() navPosition : NavPosition;
  menuElements : Array<any>;
  constructor() {}

  ngOnInit() {
    this.menuElements = LOExtras.menuBars.top;
  }

  getSlideStyle() {
    return this.navPosition.section.slide(this.navPosition.slide).getStyle();
  }
}
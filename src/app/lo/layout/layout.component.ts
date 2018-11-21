import { Component, OnInit, Input } from '@angular/core';
import { NavPosition } from '../../core/interfaces/nav-position.interface';
import { LOExtras } from '../lo.extras';

@Component({
  selector: 'lo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  @Input() navPosition : NavPosition;
  menuElements : Array<any>;
  footerContent: any;
  constructor() {}

  ngOnInit() {
    this.menuElements = LOExtras.menuBars.top;
    this.footerContent = LOExtras.footer;
  }

  getSlideStyle() {
    return this.navPosition.section.slide(this.navPosition.slide).getStyle();
  }
}
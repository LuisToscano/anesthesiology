import { Component, OnInit, Input } from '@angular/core';
import { NavPosition } from '../../core/interfaces/nav-position.interface';
import { LOExtras } from '../lo.extras';
import * as _ from "lodash";

@Component({
  selector: 'lo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  @Input() LOCurrentState : any;
  @Input() layoutConfig : any;
  menuElements : Array<any>;
  footerContent: any;

  hideInFloatingBtn : Array<string>;

  constructor() {}

  ngOnInit() {
    this.menuElements = LOExtras.menuBars.top;
    this.footerContent = LOExtras.footer;

    this.hideInFloatingBtn = _.get(this.layoutConfig, 'hide.floatBtn');
  }

  getSlideStyle() {
    return this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getStyle();
  }
}
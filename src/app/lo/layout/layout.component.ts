import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NavPosition } from '../../core/interfaces/nav-position.interface';
import { LOUnit } from "../../core/interfaces/lo-unit.interface";
import { ActionsProvider } from '../../core/providers/actions.provider';
import * as _ from "lodash";

@Component({
  selector: 'lo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnChanges {
  
  @Input() LOCurrentState : LOState;
  @Input() layoutConfig : any;

  title : string = '';
  subtitle : string = '';
  unit : LOUnit;
  menuBars : any;

  constructor(private actions : ActionsProvider) {}

  ngOnInit() {
  }

  ngOnChanges(changes : any) {
    if (changes && changes.layoutConfig && changes.layoutConfig.currentValue) {
      this.title = this.layoutConfig.title;
      this.subtitle = this.layoutConfig.subtitle;
      this.unit = this.layoutConfig.unit;
      this.menuBars = {
        top: this.actions.prepareMenuBarElements(this.layoutConfig.menuBars.top)
      };
      console.log(this.menuBars);
    }
  }

  getSlideStyle() {
    return this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getStyle();
  }

  getContentClasses() {
    let sectionId = this.LOCurrentState.position.section.getId();
    let slideClasses = Array.from(this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getClasses());

    slideClasses.unshift(sectionId);

    return slideClasses;
  }
}

interface LOState {
  interactions : Array<any>;
  position : NavPosition;
}
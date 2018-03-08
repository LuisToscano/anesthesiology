import { Component, OnInit, Input } from '@angular/core';
import { MenuBarElement } from '../../../core/interfaces/menu-bar-element.interface';
import * as _ from "lodash";

@Component({
  selector: 'menu-bar-b',
  templateUrl: './menu-bar-b.component.html',
  styleUrls: ['./menu-bar-b.component.scss']
})
export class MenuBarBComponent implements OnInit {
  
  @Input() elements : Array<MenuBarElement>;
  
  ngOnInit() {}
}

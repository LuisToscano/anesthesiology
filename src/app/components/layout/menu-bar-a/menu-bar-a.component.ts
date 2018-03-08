import { Component, OnInit, Input } from '@angular/core';
import { NavigationProvider } from '../../../core/providers/navigation.provider';
import { MenuBarElement } from '../../../core/interfaces/menu-bar-element.interface';
import * as _ from "lodash";

@Component({
  selector: 'menu-bar-a',
  templateUrl: './menu-bar-a.component.html',
  styleUrls: ['./menu-bar-a.component.scss']
})
export class MenuBarAComponent implements OnInit {
  
  @Input() elements : Array<MenuBarElement>;
  constructor(private navigation : NavigationProvider) {}
  
  ngOnInit() {}
}

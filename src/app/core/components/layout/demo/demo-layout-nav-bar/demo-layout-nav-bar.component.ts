import { Component, OnInit, Input } from '@angular/core';
import { NavPosition } from '../../../../interfaces/nav-position.interface';
import { NavigationProvider } from '../../../../providers/navigation.provider';

@Component({
  selector: 'demo-layout-nav-bar',
  templateUrl: './demo-layout-nav-bar.component.html',
  styleUrls: ['./demo-layout-nav-bar.component.scss']
})
export class DemoLayoutNavBarComponent implements OnInit {
  @Input() navPosition : NavPosition;
  constructor(private navigation : NavigationProvider) {}
  
  ngOnInit() {}
}
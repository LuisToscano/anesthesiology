import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lo-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  @Input() elements : Array<MenuBarElement>;
  constructor() {}
  
  ngOnInit() {
    console.log(this.elements);
  }
}

interface MenuBarElement{
  icon ?: string;
  text: string;
  isActive : () => boolean;
  onClick : () => void;
}
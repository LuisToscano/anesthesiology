import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-bar-b',
  templateUrl: './menu-bar-b.component.html',
  styleUrls: ['./menu-bar-b.component.scss']
})
export class MenuBarBComponent implements OnInit {
  
  elements : Array<{ text: String, isActive : Boolean }> = [
    {
      text: 'Bibliografía',
      isActive: true
    }, {
      text: 'Guia de navegación',
      isActive: false
    }, {
      text: 'Requerimientos técnicos',
      isActive: false
    }, {
      text: 'Créditos',
      isActive: false
    }
  ];
  
  ngOnInit() {}
}

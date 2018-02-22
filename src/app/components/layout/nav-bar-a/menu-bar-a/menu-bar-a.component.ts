import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-bar-a',
  templateUrl: './menu-bar-a.component.html',
  styleUrls: ['./menu-bar-a.component.scss']
})
export class MenuBarAComponent implements OnInit {
  
  elements : Array<{ class : String, text: String, isActive : Boolean }> = [
    {
      class: 'fa-home',
      text: 'Inicio',
      isActive: true
    }, {
      class: 'fa-bullseye',
      text: 'Objetivos',
      isActive: false
    }, {
      class: 'fa-power-off',
      text: 'Introducción',
      isActive: false
    }, {
      class: 'fa-table',
      text: 'Tabla de contenido',
      isActive: false
    }
  ];
  
  ngOnInit() {}
}

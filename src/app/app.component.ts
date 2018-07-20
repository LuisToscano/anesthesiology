import { Component, OnInit } from '@angular/core';
import { NavPosition } from './core/interfaces/nav-position.interface';
import { StateProvider } from './core/providers/state.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  navPosition : NavPosition;

  constructor(
    private LOState : StateProvider
  ) { }

  ngOnInit(){
    this.LOState.init();
    this.navPosition = this.LOState.getCurrentPosition();
  }
}
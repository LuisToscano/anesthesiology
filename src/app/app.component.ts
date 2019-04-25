import { Component, OnInit } from '@angular/core';
import { NavPosition } from './core/interfaces/nav-position.interface';
import { StateProvider } from './core/providers/state.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  interactionsData : any;
  LOCurrentState : any;
  readonly layoutConfig = {
    hide: {
      floatMenuBtn: ['cover', 'scenarios']
    },
    show: {
      helpBtns: ['scenarios']
    }
  };

  constructor(
    private LOState : StateProvider
  ) { }

  ngOnInit(){
    this.LOState.init();
    this.LOCurrentState = this.LOState.getCurrentState();
  }
}
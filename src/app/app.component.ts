import { Component, OnInit } from '@angular/core';
import { StateProvider } from './core/providers/state.provider';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  interactionsData : any;
  LOCurrentState : any;
  readonly checkObjectStateInterval = interval(500);
  private subscription : Subscription;

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
    this.subscription = this.checkObjectStateInterval.subscribe(() => {
      this.LOCurrentState = Object.assign({}, this.LOState.getCurrentState());
    });
  }
}
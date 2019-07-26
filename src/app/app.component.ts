import { Component, OnInit } from '@angular/core';
import { StateProvider } from './core/providers/state.provider';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { LOi18n } from "./lo/i18n/lo.i18n";
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
    title: LOi18n.title,
    subtitle: LOi18n.mainHeader.subtitle.prefix + ' ' + LOi18n.teacher
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
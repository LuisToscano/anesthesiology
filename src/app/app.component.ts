import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateProvider } from './core/providers/state.provider';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { LOi18n } from "./lo/i18n/lo.i18n";
import * as _ from "lodash";
import { LOExtras } from './lo/lo.extras';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  interactionsData : any;
  LOCurrentState : any;
  readonly checkObjectStateInterval = interval(500);
  private subscription : Subscription;

  readonly layoutConfig = {
    title: LOi18n.title,
    subtitle: LOi18n.layout.mainHeader.subtitle.prefix + ' ' + LOi18n.teacher,
    unit : {
      number: LOi18n.layout.breadcrumb.prefix + ' ' + 0,
      name: LOi18n.unit
    },
    menuBars : LOExtras.menuBars,
    navBars : {
      inner: LOi18n.layout.navBars.inner
    },
    copyright : LOExtras.copyright
  };

  constructor(
    private LOState : StateProvider
  ) { 
  }

  ngOnInit(){
    this.LOState.init();
    this.LOCurrentState = this.LOState.getCurrentState();

    this.subscription = this.LOState.LOStateChanged.subscribe( (state) => {
        this.LOCurrentState = Object.assign({}, state);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
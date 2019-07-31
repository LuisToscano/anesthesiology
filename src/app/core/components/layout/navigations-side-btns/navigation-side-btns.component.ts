import { Component, OnInit } from '@angular/core';
import { NavigationProvider } from '../../../providers/navigation.provider';

@Component({
  selector: 'navigation-side-btns',
  templateUrl: './navigation-side-btns.component.html',
  styleUrls: ['./navigation-side-btns.component.scss']
})
export class NavigationSideBtnsComponent implements OnInit {

  shouldDisplayRightBtn : boolean;
  shouldDisplayLeftBtn : boolean;

  constructor(private navigation : NavigationProvider) {}

  ngOnInit() {
    this.updateDisplay();
    this.navigation.getSlideChangedObservable().subscribe(this.updateDisplay.bind(this));
  }

  next() {
    this.navigation.nextSlide();
  }

  previous() {
    this.navigation.previousSlide();
  }

  private updateDisplay() {
    this.shouldDisplayLeftBtn = !this.navigation.isFirstSlide();
    this.shouldDisplayRightBtn = !this.navigation.isLastSlide();
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { NavigationProvider, NavPosition } from '../../../core/providers/navigation.provider';

@Component({
  selector: 'nav-bar-a',
  templateUrl: './nav-bar-a.component.html',
  styleUrls: ['./nav-bar-a.component.scss']
})
export class NavBarAComponent implements OnInit {
  
  @Input() navPosition : NavPosition;
  constructor(private navigation : NavigationProvider) {}
  
  ngOnInit() {}

  next() {
    this.navigation.nextSlide();
  }

  getSectionName() {
    return this.navPosition.section.getName();
  }

  previous() {
    this.navigation.previousSlide();
  }

  isFirstSlide() {
    return this.navPosition.slide === 0;
  }

  isLastSlide() {
    return this.navPosition.slide === (this.navPosition.totalSlides - 1);
  }
}

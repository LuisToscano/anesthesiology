import { Component, Input } from '@angular/core';
import { NavigationProvider } from '../../../providers/navigation.provider';

@Component({
  selector: 'lo-inner-nav-bar',
  templateUrl: './inner-nav-bar.component.html',
  styleUrls: ['./inner-nav-bar.component.scss']
})
export class InnerNavBarComponent {
  
  @Input() LOCurrentState : any;
  constructor(private navigation : NavigationProvider) {}

  next() {
    this.navigation.nextSlide();
  }

  getSectionName() {
    return this.LOCurrentState.position.section.getName();
  }

  getSectionIcon() {
    return this.LOCurrentState.position.section.getIcon();
  }

  getPositionStr() {
    return this.LOCurrentState.position.slide + 1 + " / " + this.LOCurrentState.position.totalSlides;
  }

  previous() {
    this.navigation.previousSlide();
  }

  isFirstSlide() {
    return this.navigation.isFirstSlide();
  }

  isLastSlide() {
    return this.navigation.isLastSlide();
  }

  hasOnlyOneSlide() {
    return this.navigation.hasOnlyOneSlide();
  }
}

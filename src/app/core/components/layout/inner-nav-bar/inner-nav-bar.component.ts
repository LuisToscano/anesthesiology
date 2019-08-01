import { Component, Input, OnInit } from '@angular/core';
import { NavigationProvider } from '../../../providers/navigation.provider';

@Component({
  selector: 'lo-inner-nav-bar',
  templateUrl: './inner-nav-bar.component.html',
  styleUrls: ['./inner-nav-bar.component.scss']
})
export class InnerNavBarComponent implements OnInit{
  
  @Input() prefix : string;
  @Input() previousBtnTag : string;
  @Input() nextBtnTag : string;

  shouldDisplayBothBtn : boolean;
  shouldDisplayRightBtn : boolean;
  shouldDisplayLeftBtn : boolean;
  position : string;
  section = {
    name: "",
    icon: "",
  };
  
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
    const position = this.navigation.getCurrentPosition();
    this.position = position.slide + 1 + " / " + position.totalSlides;
    this.section.icon = position.section.getIcon();
    this.section.name = position.section.getName();
    this.shouldDisplayBothBtn = !this.navigation.hasOnlyOneSlide();
    this.shouldDisplayLeftBtn = !this.navigation.isFirstSlide();
    this.shouldDisplayRightBtn = !this.navigation.isLastSlide();
  }
}

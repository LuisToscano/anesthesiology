import { Component, OnInit, Input } from '@angular/core';
import { NavigationProvider } from '../../../providers/navigation.provider';

@Component({
  selector: 'floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss']
})
export class FloatingBtnComponent implements OnInit {

  @Input() hiddenIn : any;

  constructor(private navigation : NavigationProvider) {}

  ngOnInit() {}

  shouldHide() {
    return Array.isArray(this.hiddenIn) && this.hiddenIn.includes(
      this.navigation.getCurrentPosition().section.getName()
    );
  }
}
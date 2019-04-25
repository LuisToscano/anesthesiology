import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss']
})
export class FloatingBtnComponent implements OnInit {

  @Input() floatBtnIconTxt : string;
  @Input() floatBtnTag : string;
  iconClassObj = {}; 

  constructor() {}

  ngOnInit() {
    let iconClassKey = this.floatBtnIconTxt ? 'fa-' + this.floatBtnIconTxt : 'fa-question';
    this.iconClassObj[iconClassKey] = true;
  }
}
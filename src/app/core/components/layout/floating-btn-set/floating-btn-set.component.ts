import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'floating-btn-set',
  templateUrl: './floating-btn-set.component.html',
  styleUrls: ['./floating-btn-set.component.scss']
})
export class FloatingBtnSetComponent implements OnInit {

  @Input() floatingBtns : Array<any>;

  constructor() {}

  ngOnInit() {}
}
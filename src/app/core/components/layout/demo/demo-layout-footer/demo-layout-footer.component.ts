import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'demo-layout-footer',
  templateUrl: './demo-layout-footer.component.html',
  styleUrls: ['./demo-layout-footer.component.scss']
})
export class DemoLayoutFooterComponent implements OnInit {

  @Input() footer : Array<any>;

  constructor() {}

  ngOnInit() {}
}
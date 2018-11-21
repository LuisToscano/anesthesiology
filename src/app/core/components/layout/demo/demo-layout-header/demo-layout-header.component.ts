import { Component, OnInit, Input } from '@angular/core';
import { LOExtrasProvider } from '../../../../providers/lo-extras.provider';

@Component({
  selector: 'demo-layout-header',
  templateUrl: './demo-layout-header.component.html',
  styleUrls: ['./demo-layout-header.component.scss']
})
export class DemoLayoutHeaderComponent implements OnInit {
  
  @Input() menuElements : Array<any>;
  preparedMenuElements : Array<any>;

  constructor(
    private extras : LOExtrasProvider
  ) {}

  ngOnInit() {
    this.preparedMenuElements = this.menuElements ? this.extras.prepareMenuBarElements(this.menuElements) : [];
  }
}
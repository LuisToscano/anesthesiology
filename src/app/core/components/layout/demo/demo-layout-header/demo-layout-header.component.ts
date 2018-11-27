import { Component, OnInit, Input } from '@angular/core';
import { ActionsProvider } from '../../../../providers/actions.provider';

@Component({
  selector: 'demo-layout-header',
  templateUrl: './demo-layout-header.component.html',
  styleUrls: ['./demo-layout-header.component.scss']
})
export class DemoLayoutHeaderComponent implements OnInit {
  
  @Input() menuElements : Array<any>;
  preparedMenuElements : Array<any>;

  constructor(
    private extras : ActionsProvider
  ) {}

  ngOnInit() {
    this.preparedMenuElements = this.menuElements ? this.extras.prepareMenuBarElements(this.menuElements) : [];
  }
}
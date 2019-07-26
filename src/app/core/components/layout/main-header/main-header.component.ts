import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  @Input() title: String[];
  @Input() subtitle: String[];

  constructor() {}
}

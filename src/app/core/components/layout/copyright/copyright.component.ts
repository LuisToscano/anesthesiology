import { Component, Input } from '@angular/core';

@Component({
  selector: 'lo-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent{
  @Input() copyright : Array<any>;
  constructor() {}
}

import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'lo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text : string;
  @Input() onClick : () => void;
  @Input() isActive : () => Boolean;
  data : ButtonData;

  constructor() {}

  ngOnInit() {
    this.text = this.data.text ? this.data.text : this.text;
    this.onClick = this.data.onClick ? this.data.onClick : this.onClick;
    this.isActive = this.data.isActive ? this.data.isActive : this.isActive;
  }
}

interface ButtonData{
  text: string,
  onClick ?: () => void,
  isActive ?: () => Boolean
}
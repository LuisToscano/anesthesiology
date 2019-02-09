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
  btnStyle : any;

  constructor() {
    this.btnStyle = {};
  }

  ngOnInit() {
    this.text = this.data.text ? this.data.text : this.text;
    this.btnStyle = this.data.style ? this.data.style : this.btnStyle;
    this.onClick = this.data.onClick ? this.data.onClick : this.onClick ? this.onClick : () => true;
    this.isActive = this.data.isActive ? this.data.isActive : this.isActive ? this.isActive : () => true;
  }
}

interface ButtonData{
  text: string,
  style ?: any,
  onClick ?: () => void,
  isActive ?: () => Boolean
}
import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'lo-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() source : string;
  @Input() style : any;
  data : ImgData;

  constructor() {}

  ngOnInit() {
    this.source = this.data.source ? this.data.source : this.source;
    this.style = this.data.style ? this.data.style : this.style;
  }
}

interface ImgData{
  source : string;
  style : any;
}
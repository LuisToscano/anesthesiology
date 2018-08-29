import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title : string;
  @Input() iconClass : string;
  data : TitleData;

  constructor() {}

  ngOnInit() {
    this.title = this.data.title ? this.data.title : this.title;
    this.iconClass = this.data.iconClass ? this.data.iconClass : this.iconClass;
  }

  getInnerHtml() {
    let title = '<h1>' + this.title + '</h1>';
    return this.iconClass ?
    '<i class="fas fa-2x '+ this.iconClass +'"></i>' + title : title;
  }

  getIcon() {
    return this.iconClass;
  }
}

interface TitleData{
  title: string,
  iconClass ?: string;
}
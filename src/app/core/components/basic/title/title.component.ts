import { Component, OnInit, Input } from '@angular/core';

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
    this.title = this.data && this.data.title ? this.data.title : this.title;
    this.iconClass = this.data && this.data.iconClass ? this.data.iconClass : this.iconClass;
  }
}

interface TitleData{
  title: string,
  iconClass ?: string;
}
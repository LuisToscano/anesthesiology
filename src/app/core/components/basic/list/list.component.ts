import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() elements : Array<string>;
  @Input() numbered : boolean;
  data : ListData;

  constructor() {}

  ngOnInit() {
    this.elements = this.data && this.data.elements ? this.data.elements : this.elements;
    this.numbered = this.data && this.data.numbered ? this.data.numbered : this.numbered;
  }
}

interface ListData{
  elements: Array<string>,
  numbered : boolean
}
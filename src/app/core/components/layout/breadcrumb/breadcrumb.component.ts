import { Component, OnInit, Input } from '@angular/core';
import { LOUnit } from "../../../interfaces/lo-unit.interface";

@Component({
  selector: 'lo-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  constructor() {}
  @Input() unit : LOUnit;

  ngOnInit() {}
}
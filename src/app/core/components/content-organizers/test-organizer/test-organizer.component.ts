import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'test-organizer',
  templateUrl: './test-organizer.component.html',
  styleUrls: ['./test-organizer.component.scss']
})
export class TestOrganizerComponent implements OnInit {

  data : Array<any>;

  constructor() {
  }

  ngOnInit() {
      this.data = [{
        text: 'soy una prueba de parrafo',
        args: {}
      }];
  }
}
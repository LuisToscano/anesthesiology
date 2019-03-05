import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'activity-error-modal',
  templateUrl: './activity-error-modal.html',
  styleUrls: ['./activity-error-modal.scss']
})
export class ActivityErrorModal implements OnInit {

  //@Input() text : string;

  constructor() {}

  ngOnInit() {}
}

interface ActivityErrorModalData{}
import { Component, OnInit, Input } from '@angular/core';
import { ParagraphData } from '../../basic/paragraph/paragraph.component';

@Component({
  selector: 'copyright-bar-a',
  templateUrl: './copyright-bar-a.component.html',
  styleUrls: ['./copyright-bar-a.component.scss']
})
export class CopyrightBarAComponent implements OnInit {
  @Input() copyright : Array<ParagraphData>;
  constructor() {}

  ngOnInit() {}
}

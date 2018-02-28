import { Component, OnInit} from '@angular/core';
import { SideMenuProvider } from '../../../core/providers/side-menu.provider';

@Component({
  selector: 'side-menu-column',
  templateUrl: './side-menu-column.component.html',
  styleUrls: ['./side-menu-column.component.scss']
})
export class SideMenuColumnComponent implements OnInit {
  constructor(private sideMenu : SideMenuProvider) { }
  ngOnInit() {}
}

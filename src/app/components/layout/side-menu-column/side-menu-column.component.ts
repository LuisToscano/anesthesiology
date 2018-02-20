import { Component, OnInit} from '@angular/core';
import { SideMenuService } from '../../../core/services/side-menu.service'

@Component({
  selector: 'side-menu-column',
  templateUrl: './side-menu-column.component.html',
  styleUrls: ['./side-menu-column.component.scss']
})
export class SideMenuColumnComponent implements OnInit {
  constructor(private sideMenu : SideMenuService) { }
  ngOnInit() {}
}

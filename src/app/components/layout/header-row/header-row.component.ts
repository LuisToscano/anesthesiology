import { Component, OnInit,   Input } from '@angular/core';
import { SideMenuService } from '../../../core/services/side-menu.service';

@Component({
  selector: 'header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
  @Input() title: string;
  constructor(private sideMenu : SideMenuService) {}

  ngOnInit() {
  }

  toggleSideMenu(){
    this.sideMenu.toggleVisible();
  }
}

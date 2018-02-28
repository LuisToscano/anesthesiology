import { Component, OnInit,   Input } from '@angular/core';
import { SideMenuProvider } from '../../../core/providers/side-menu.provider';

@Component({
  selector: 'header-row',
  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.scss']
})
export class HeaderRowComponent implements OnInit {
  @Input() title: string;
  constructor(private sideMenu : SideMenuProvider) {}

  ngOnInit() {
  }

  toggleSideMenu(){
    this.sideMenu.toggleVisible();
  }
}

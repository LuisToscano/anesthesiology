import { Component, OnInit, Input } from '@angular/core';
import { SideMenuService } from '../../../core/services/side-menu.service';

@Component({
  selector: 'banner-unal-a',
  templateUrl: './banner-unal-a.component.html',
  styleUrls: ['./banner-unal-a.component.scss']
})
export class BannerUnalAComponent implements OnInit {

  @Input() title: String[];
  @Input() subtitle: String[];

  constructor(private sideMenu : SideMenuService) {}

  ngOnInit() {}
}

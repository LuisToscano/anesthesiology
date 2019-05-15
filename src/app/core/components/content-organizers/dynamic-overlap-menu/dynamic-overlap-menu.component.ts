import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinamyc-overlap-menu',
  templateUrl: './dynamic-overlap-menu.component.html',
  styleUrls: ['./dynamic-overlap-menu.component.scss']
})
export class DynamicOverlapMenuComponent implements OnInit {

  data : DynamicOverlapMenuData;
  selectionTxt : string;
  enabledAmount : number = 0;

  constructor() {}

  ngOnInit() {
    this.data.btns = this.data.btns ? this.data.btns : [];
    this.data.defaultSelection = this.data.defaultSelection ? this.data.defaultSelection : '';
    this.data.btns = this.data.btns.map(btn => {
      return {
        tag: btn.tag ? btn.tag : '',
        width: btn.width ? btn.width : 10,
        top: btn.top ? btn.top : 0,
        left: btn.left ? btn.left : 0,
        target: btn.target ? btn.target : '',
        validateSection: btn.validateSection ? btn.validateSection : '',
        disableOnInteractions: btn.disableOnInteractions ? btn.disableOnInteractions : false,
        disableOnVisit: btn.disableOnVisit ? btn.disableOnVisit : false,
        bgImages: {
            normal: btn.bgImages && btn.bgImages.normal ? btn.bgImages.normal : '' ,
            hover: btn.bgImages && btn.bgImages.hover ? btn.bgImages.hover : (btn.bgImages && btn.bgImages.normal ? btn.bgImages.normal : ''),
            disabled: btn.bgImages && btn.bgImages.disabled ? btn.bgImages.disabled : (btn.bgImages && btn.bgImages.normal ? btn.bgImages.normal : ''),
        }
      };
    });

    this.selectionTxt = this.data.defaultSelection;
  }

  onItemHover(hoveredTag) {
    this.selectionTxt = hoveredTag ? hoveredTag : this.data.defaultSelection;
  }
}

interface DynamicOverlapMenuData{
  defaultSelection : string,
  btns : Array<any>
}
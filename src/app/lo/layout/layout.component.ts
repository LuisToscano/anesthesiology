import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NavPosition } from '../../core/interfaces/nav-position.interface';
import { LOExtras } from '../lo.extras';
import { InteractionStatus } from '../../core/enums/interactions.enum';
import { ModalProvider } from '../../core/providers/modal-provider';
import { LOCompletionModal } from '../../core/components/layout/modals/lo-completion-modal/lo-completion-modal';
import * as _ from "lodash";

@Component({
  selector: 'lo-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnChanges {
  
  @Input() LOCurrentState : LOState;
  @Input() layoutConfig : any;
  menuElements : Array<any>;
  footerContent: any;

  helpBtns : Array<any>;
  hideInFloatingBtn : Array<string>;
  showHelpBtns : Array<string>;
  isLOCompleted : boolean = false;

  constructor(private modal : ModalProvider) {}

  ngOnInit() {
    this.menuElements = LOExtras.menuBars.top;
    this.footerContent = LOExtras.footer;

    this.hideInFloatingBtn = _.get(this.layoutConfig, 'hide.floatMenuBtn');
    this.showHelpBtns = _.get(this.layoutConfig, 'show.helpBtns');

    this.helpBtns = LOExtras.helpBtns;
  }

  ngOnChanges() {
    let isMainMenu = this.LOCurrentState.position.section.getId() === 'scenarios';
    let interactionsComplete = Object.keys(this.LOCurrentState.interactions).every(intKey => {
      let int = this.LOCurrentState.interactions[intKey];
      return int.status === InteractionStatus.Correct || int.previouslyCorrect === true;
    });

    if (!this.isLOCompleted && isMainMenu && interactionsComplete) {
      this.isLOCompleted = true;
      this.modal.showModal({
        component: LOCompletionModal,
        data: {}
      });
    }
  }

  getSlideStyle() {
    return this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getStyle();
  }

  getContentClasses() {
    let sectionId = this.LOCurrentState.position.section.getId();
    let slideClasses = Array.from(this.LOCurrentState.position.section.slide(
      this.LOCurrentState.position.slide
    ).getClasses());

    slideClasses.unshift(sectionId);

    return slideClasses;
  }
}

interface LOState {
  interactions : Array<any>;
  position : NavPosition;
}
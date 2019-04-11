import { Directive, ElementRef, HostBinding, Input, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { NavigationProvider } from '../../../providers/navigation.provider';
import { InteractionsProvider } from '../../../providers/interactions.provider';

@Directive({
  selector: '[dynamicOverlapMenuItem]'
})
export class DynamicOverlapMenuItemDirective implements OnInit {
    @HostBinding('class')
    elementClass = 'overlap-menu-item';

    @Input('omi-width-perc') widthPercentage: number;
    @Input('omi-left-perc') leftPercentage: number;
    @Input('omi-top-perc') topPercentage: number;

    @Input('omi-redirect') redirectTo: string;
    @Input('omi-btn-img') btnImg: string;
    @Input('omi-btn-img-hover') btnHoverImg : string;
    @Input('omi-btn-img-disabled') btnDisabledImg : string;
    @Input('omi-btn-tag') btnTag : string;
    @Input('omi-disable-on-interactions') disableOnInteractions: string;
    @Input('omi-disable-on-visit') disableOnVisit: string;
    @Input('omi-validate-section') validateSection: string;

    @Output() hover = new EventEmitter<string>();

    private imgElem : any;
    private isDisabled : boolean;
    private shouldDisableOnInteractions : boolean;
    private shouldDisableOnVisit : boolean;
    private readonly assetsPrefix = 'assets/img/';

    constructor(private el: ElementRef, private navigation : NavigationProvider,
        private interactions : InteractionsProvider) {
        this.isDisabled = false;
        this.imgElem = document.createElement("img");
        this.imgElem.className = 'overlap-menu-item-img';
        this.imgElem.style.objectFit = 'contain';
        this.imgElem.style.width = '100%';
        this.imgElem.style.height = '100%';
        el.nativeElement.appendChild(this.imgElem);
    }

    ngOnInit() {
        this.shouldDisableOnInteractions = this.disableOnInteractions === 'true';
        this.shouldDisableOnVisit = this.disableOnVisit === 'true';
        this.el.nativeElement.style.width = this.widthPercentage + '%';
        this.el.nativeElement.style.top = this.topPercentage + '%';
        this.el.nativeElement.style.left = this.leftPercentage + '%';

        if (this.validateSection) {
            if (this.shouldDisableOnInteractions) {
                this.isDisabled = !this.interactions.areAllSectionInteractionsCorrect(this.validateSection);
            } else if (this.shouldDisableOnVisit) {
                this.isDisabled = !this.navigation.hasSectionBeenVisited(this.validateSection);
            }
        }

        this.imgElem.src = this.assetsPrefix + (this.isDisabled ? this.btnDisabledImg : this.btnImg);
    }

    @HostListener('mouseenter') onMouseEnter() {
        if (!this.isDisabled) {
            this.imgElem.src = this.assetsPrefix + this.btnHoverImg;
        }
        this.hover.emit(this.btnTag);
    }

    @HostListener('mouseleave') onMouseLeave() {
        if (!this.isDisabled) {
            this.imgElem.src = this.assetsPrefix + this.btnImg;
        }
        this.hover.emit('');
    }

    @HostListener('click') onClick() {
        if (!this.isDisabled) {
            this.navigation.goToSectionSlide(this.redirectTo, 0);
        }
    }
}
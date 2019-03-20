import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NavigationProvider } from '../providers/navigation.provider';
import { NavPosition } from '../interfaces/nav-position.interface';

@Directive({
  selector: '[hideInSection]'
})
export class HideInSectionDirective implements OnInit {
    @Input('hideInSection') hideInSection: string | Array<string>;
    originalDisplay : string;

    constructor(private el: ElementRef, private navigation : NavigationProvider) {
        this.originalDisplay = 'initial';
    }
 
    private updateDisplay() {
        let currentSection = this.navigation.getCurrentPosition().section.getId();
        this.el.nativeElement.style.display = this.hideInSection.includes(currentSection) ?
            'none' : this.originalDisplay;
    }

    ngOnInit(){
        if (!this.hideInSection) {
            return;
        }

        if (!Array.isArray(this.hideInSection)) {
            this.hideInSection = this.hideInSection.split(',');
        }

        this.updateDisplay();
        this.navigation.getSlideChangedObservable().subscribe(this.currentSlideChanged.bind(this));
    }

    private currentSlideChanged(navPos : NavPosition) {
        this.el.nativeElement.style.display = this.hideInSection.includes(navPos.section.getId()) ?
            'none' : this.originalDisplay;
    }
}
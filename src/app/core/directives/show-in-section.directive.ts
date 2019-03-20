import { Directive, ElementRef, Input } from '@angular/core';
import { NavigationProvider } from '../providers/navigation.provider';
import { NavPosition } from '../interfaces/nav-position.interface';

@Directive({
  selector: '[showInSection]'
})
export class ShowInSectionDirective {
  @Input('showInSection') showInSection: string | Array<string>;
  originalDisplay : string;

    constructor(private el: ElementRef, private navigation : NavigationProvider) {
        this.originalDisplay = this.el.nativeElement.style.display;
    }
 
    private updateDisplay() {
        let currentSection = this.navigation.getCurrentPosition().section.getId();
        this.el.nativeElement.style.display = this.showInSection.includes(currentSection) ?
            this.originalDisplay : 'none';
    }

    ngOnInit(){
        if (!this.showInSection) {
            return;
        }

        if (!Array.isArray(this.showInSection)) {
            this.showInSection = this.showInSection.split(',');
        }

        this.updateDisplay();
        this.navigation.getSlideChangedObservable().subscribe(this.currentSlideChanged.bind(this));
    }

    private currentSlideChanged(navPos : NavPosition) {
        this.el.nativeElement.style.display = this.showInSection.includes(navPos.section.getId()) ?
            this.originalDisplay : 'none';
    }
}
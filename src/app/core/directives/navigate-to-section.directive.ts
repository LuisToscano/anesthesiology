import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { NavigationProvider } from '../providers/navigation.provider';

@Directive({
  selector: '[navigateToSection]'
})
export class NavigateToSectionDirective {
    @Input('navigateToSection') targetSection: string;

    constructor(private el: ElementRef, private navigation : NavigationProvider) {}

    @HostListener('click') onClick() {
        this.navigation.goToSectionSlide(this.targetSection, 0);
    }
    
}
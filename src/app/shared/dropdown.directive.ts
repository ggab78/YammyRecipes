import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  // constructor() {
  // }
  // @HostListener('click') toogleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  constructor(private elRef: ElementRef) {
  }

  @HostListener('document:click', ['$event']) toogleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}

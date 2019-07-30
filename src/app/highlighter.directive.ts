import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appHighlighter]"
})
export class HighlighterDirective {
  constructor() {}
  @HostListener("mouseover")
  mouseover() {
    this.backgroundColor='red';
  }
  @HostListener("mouseleave")
  mouseleave() {
    this.backgroundColor='white';
  }
  @HostBinding('style.backgroundColor')
  backgroundColor:string;
}

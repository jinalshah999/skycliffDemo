import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appApphigh]"
})
export class ApphighDirective {
  constructor() {}

  @HostBinding("style.backgroundColor")
  backgroundColor: String;
  @HostListener("mouseenter")
  mouseover() {
    this.backgroundColor = "red";
  }
  @HostListener("mouseleave")
  mouseleave() {
    this.backgroundColor = "white";
  }
}

import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMyhidden]'
})
export class MyhiddenDirective implements OnChanges {

  @Input()
  data: any;

  constructor(
    private  el: ElementRef
  ) { }

  ngOnChanges() {
    if (this.data) {
      this.el.nativeElement.style.display = '';
    } else {
      this.el.nativeElement.style.display = 'none';
    }
  }


}

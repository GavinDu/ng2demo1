import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective {

  constructor(
    private  templateRef: TemplateRef<any>,
    private  viewContainer: ViewContainerRef
  ) { }

  @Input() set appMyif(data: any){
    if (data) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}

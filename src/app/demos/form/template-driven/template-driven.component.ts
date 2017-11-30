import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  fv;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(formValue) {
    this.fv = formValue;
  }

}

import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit, DoCheck {
  @Input()
  person;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in person-detail');
  }

}

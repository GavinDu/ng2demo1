import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {
  person = {
    name: 'Bob',
    age: 25
  };

  constructor() { }

  ngOnInit() {
  }
  changePerson() {
    this.person = {
      name: 'Alice',
      age: 21
    };
  }

  changePersonName() {
    this.person.name = 'Alex';
  }
}

import { Component, OnInit, DoCheck } from '@angular/core';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit, DoCheck {

  // person = {
  //   name: 'Bob',
  //   age: 25
  // };

  person = Immutable.Map({
    name: 'Bob',
    age: 25
  });

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in cd');
  }

  addAge() {
    // this.person.age++;
    // this.person = {...this.person, age: this.person.age };
    // overwrite the old person and refer to a new space
    this.person = this.person.merge(
      {age: (+this.person.get('age') + 1)
      });
  }

  testAge() {

  }

}

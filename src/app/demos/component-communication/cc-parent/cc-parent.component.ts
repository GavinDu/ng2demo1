import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/person';

@Component({
  selector: 'app-cc-parent',
  templateUrl: './cc-parent.component.html',
  styleUrls: ['./cc-parent.component.scss']
})
export class CcParentComponent implements OnInit {
  person: Person = {
    name: 'Bob',
    age: 20
  };

  constructor() { }

  ngOnInit() {
  }

  handleAddAge(e) {
    console.log(e);
    this.person.age = e;
  }

}

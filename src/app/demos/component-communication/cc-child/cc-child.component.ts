import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../shared/person';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.scss']
})
export class CcChildComponent implements OnInit {
  @Input('person')
  childPerson: Person;

  @Output()
  onAddAge = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  addAge() {
    if (this.childPerson) {
      this.childPerson.age++;
      this.onAddAge.emit(this.childPerson.age);
    }

  }
}

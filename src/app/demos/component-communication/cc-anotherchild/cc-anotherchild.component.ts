import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../shared/person';

@Component({
  selector: 'app-cc-anotherchild',
  templateUrl: './cc-anotherchild.component.html',
  styleUrls: ['./cc-anotherchild.component.scss']
})
export class CcAnotherchildComponent implements OnInit {
  @Input()
  person: Person;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.scss']
})
export class NgDirectiveComponent implements OnInit {

  myColor = 'red';

  myStyle = {
    'font-size': '3em',
    color: this.myColor
  };

  useBigFont = false;

  person = null;

    persons = [
    {name: 'Bob', age: 23 },
    {name: 'Alice', age: 25},
    {name: 'Alex', age: 21}
  ];

  mySwitch: number;
  constructor() { }

  ngOnInit() {
  }

  togglePerson() {
    this.person = this.person ? null : { name: 'Bob'};
  }

  switch(val: number) {
    this.mySwitch = val;
  }


}

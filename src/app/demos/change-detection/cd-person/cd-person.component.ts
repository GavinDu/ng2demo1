import {Component, OnInit, Input, DoCheck, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-cd-person',
  templateUrl: './cd-person.component.html',
  styleUrls: ['./cd-person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdPersonComponent implements OnInit, DoCheck {
  @Input()
  person;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(new Date() + '- ngDoCheck in cd-person');
  }

}

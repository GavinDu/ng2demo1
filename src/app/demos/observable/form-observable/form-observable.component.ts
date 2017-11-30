import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-form-observable',
  templateUrl: './form-observable.component.html',
  styleUrls: ['./form-observable.component.css']
})
export class FormObservableComponent implements OnInit {

  counter: number;

  counterFC: FormControl = new FormControl();

  counterSub: any;

  constructor() {
    this.counterSub = this.counterFC.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.counter = value,
        err => console.log(err),
        () => console.log('Done')
      );
  }

  ngOnInit() {
  }

  onUnsubscribe() {
    this.counterSub.unsubscribe();
  }

}

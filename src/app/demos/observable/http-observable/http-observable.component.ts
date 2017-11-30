import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { PersonService } from '../../shared/person.service';
import {FormControl} from '@angular/forms';

import { Observable } from 'rxjs/Rx';

@Component ({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css']
})
export class HttpObservableComponent implements OnInit {

  people = [];

  nameFC: FormControl = new FormControl();

  age: any;

  constructor(
    private http: Http,
    private personService: PersonService
  ) {
    // this.http.get('https://nulljs.com/api/people')
    //   .subscribe(
    //     (data) => this.people = data.json(),
    //     (err) => console.log(err),
    //     () => console.log('done')
    //   );
    this.personService.getPeople()
      .subscribe((people) => this.people = people);
    this.nameFC.valueChanges
      .debounceTime(500)
      .map((value) => this.getPersonId(value))
      .switchMap(id => id === null ? Observable.of({age: 'Not Available'}) : this.personService.getPerson(id))
      .subscribe((person) => this.age = person.age);
  }

  ngOnInit() {
  }

  getPersonId(name: string): number {
    const matched = this.people.filter((p) => name === p.name);
    return matched.length ? matched[0].id : null;
  }

}

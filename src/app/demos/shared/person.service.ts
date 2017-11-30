import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {

  constructor(
    private http: Http
  ) { }

  getPeople(): Observable<any> {
    return this.http.get('https://nulljs.com/api/people')
      .map(data => data.json())
      .catch(err => Observable.throw(err));
  }

  getPerson(id: number): Observable<any> {
      return this.http.get('https://nulljs.com/api/people/' + id)
        .map(data => data.json())
        .catch(err => Observable.throw(err));
  }

}

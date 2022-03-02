import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators'
import { Numberholder } from '../section-12';

interface wikipediaService {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    } []
  }
}

// const observable = new Observable<Car>((obs) => {
//     obs.next({
//       year: 2000,
//       color: 'red',
//       running: true,
//       make: {
//         name: 'sari',
//         dateCreated: 2020
//       }
//     });
// }).pipe(pluck('make','name'))
// observable.subscribe((observable) => {
//     console.log(observable);
// })
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(
    private http: HttpClient
  ) { }

  search(term: string): Observable<any> {
    return this.http.get<wikipediaService>('https://en.wikipedua.org/w/php?', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      }
    })//.pipe(pluck('query', 'search'))
  }
}

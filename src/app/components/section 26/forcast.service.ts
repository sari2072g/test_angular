import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, mergeMap, pluck, retry, share, switchMap, tap, toArray } from 'rxjs/operators';
import { NotificationService } from './notifications/notification.service';

interface OpenWeatherResponse {
  list: {
    dt_txt: string;
    main: {
      tmp: number;
    }
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForcastService {
  private url = 'https://api.openweathermap.org/data/2.5/forecast';
  constructor(
    private http: HttpClient,
    private notifications: NotificationService,
    ) { }

  getForCast() {
   return this.getCurrentLocation()
    .pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', 'f557b20727184231a597c710c8be3106');
      }),
      switchMap(params => 
        this.http.get<OpenWeatherResponse>
        (this.url , { params })
        ),
        pluck('list'),
        mergeMap(p => of(...p)),
        filter((value, index) => index % 8 ===0),
        map(value => {
          return {
            dateString: value.dt_txt,
            temp: value.main.tmp,
          }
        }),
        toArray(),
        share()
    );
  }

  getCurrentLocation() {
    return new Observable<any>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        },
      )
    }).pipe(
      retry(1),
      tap(() => {
        this.notifications.addSuccess('Got your location');
      },
      ),
      catchError((err) => {
        this.notifications.addError('Failed to get your location');
        return throwError(err);
      })
    )
  }
}



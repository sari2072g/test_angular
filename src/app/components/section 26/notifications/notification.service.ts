import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

 export interface Command {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  massegesInput: Subject<Command>;
  massegesOutput: Observable<Command[]>;

  constructor() {
    this.massegesInput = new Subject<Command>();
    this.massegesOutput =  this.massegesInput
    .pipe(
      scan((acc: Command[], value: Command) => {
        if(value.type == 'clear')
          return acc.filter(massege => massege.id !== value.id);
          else {
            return [...acc, value];
          }

      }, [])
    );
   }

   getMasseges() { }

  addSuccess(massege: string) {
    const id = this.randomId();
    this.massegesInput.next(
      {
        id: id,
        text: massege,
        type: 'success'
      });
      setTimeout(() => {
        this.clearMessege(id)
      }, 5000);
  }

  addError(massege: string) {
    const id = this.randomId();

    this.massegesInput.next({
      id: id,
      type: 'error',
      text: massege,
     });

     setTimeout(() => {
      this.clearMessege(id)
    }, 5000);
  }

  clearMessege(id: number) {
    this.massegesInput.next(
      {
        id: this.randomId(),
        type: 'clear'
      })

  }

  randomId() {
    return Math.round(Math.random() * 10000);
  }
}

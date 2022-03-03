import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker'
@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent implements OnInit {
randomText = lorem.sentence();
enteredtext = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
   this.enteredtext = value;
  }
  compare(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter) return 'pending';
      return randomLetter === enteredLetter ? 'correct' : 'incorrect';

  }
}

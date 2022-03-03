import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.password = 'my password';
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChar = '';
    if(this.includeLetters) validChar += letters;
    if(this.includeNumbers) validChar += numbers;
    if(this.includeSymbols) validChar += symbols;
    let generatedPassword = '';
    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }
    this.password = generatedPassword;

  }

  onChangeUserLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUserNumbers() {
   this.includeNumbers = !this.includeNumbers;
  }

  onChangeUserSymbols() {
   this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
   const parsedValue = Number(value);

   if(!isNaN(parsedValue))
   this.length = parsedValue;
  }
}

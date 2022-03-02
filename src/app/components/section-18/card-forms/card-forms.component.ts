import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-forms',
  templateUrl: './card-forms.component.html',
  styleUrls: ['./card-forms.component.css']
})
export class CardFormsComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
      Validators.pattern(/\s/)
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern(/\s/)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

  }
  onReset() {
    this.cardForm.reset();
  }
}

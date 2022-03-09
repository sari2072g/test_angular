import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    DividerComponent,
    InputComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
  ,exports:[
    DividerComponent,
    InputComponent,
    ModalComponent
  ]
})
export class SharedModule { }

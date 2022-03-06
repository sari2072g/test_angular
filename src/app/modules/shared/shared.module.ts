import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DividerComponent, InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
  ,exports:[DividerComponent,InputComponent]
})
export class SharedModule { }

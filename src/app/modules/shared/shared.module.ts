import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  declarations: [
    DividerComponent,
    InputComponent,
    ModalComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
  ,exports:[
    DividerComponent,
    InputComponent,
    ModalComponent,
    PaginatorComponent,
  ]
})
export class SharedModule { }

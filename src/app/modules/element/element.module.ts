import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [ElementHomeComponent, PlaceholderComponent],
  imports: [
    CommonModule,
    ElementRoutingModule
  ],
  exports:[]
})
export class ElementModule { }

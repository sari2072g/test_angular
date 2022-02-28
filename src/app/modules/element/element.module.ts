import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimeDirective } from 'src/app/directive/time.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [ElementHomeComponent, PlaceholderComponent,TimeDirective, SegmentComponent],
  imports: [
    CommonModule,
    ElementRoutingModule,
    SharedModule

  ],
  exports:[]
})
export class ElementModule { }

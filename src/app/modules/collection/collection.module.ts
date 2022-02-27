import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';


@NgModule({
  declarations: [CollectionHomeComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ],
  exports:[]
})
export class CollectionModule { }

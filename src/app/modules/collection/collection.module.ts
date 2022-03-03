import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionHomeComponent,
    TableComponent,
    BiographyComponent, 
    CompaniesComponent, 
    PartnersComponent, 
    TabsComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class CollectionModule { }

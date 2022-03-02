import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { CardsComponent } from './components/section-3/cards/cards.component';
import { TypingComponent } from './components/section-4/typing/typing.component';
import { PipesComponent } from './components/section-5/pipes/pipes.component';
import { ConvertPipe } from './pipes/convert.pipe';
import { PagesComponent } from './components/section-6/pages/pages.component';
import { ClassDirective } from './directive/class.directive';
import { TimesDirective } from './directive/times.directive';
import { CompsComponent } from './components/section-7/comps/comps.component';
import { ElementHomeComponent } from './modules/element/element-home/element-home.component';
import { CollectionHomeComponent } from './modules/collection/collection-home/collection-home.component';
import { CollectionModule } from './modules/collection/collection.module';
import { HomeComponent } from './components/section-7/home/home.component';
import { NotFoundComponent } from './components/section-7/not-found/not-found.component';
import { StatisticComponent } from './modules/views/statistic/statistic.component';
import { ViewsHomeComponent } from './modules/views/views-home/views-home.component';
import { ViewsModule } from './modules/views/views.module';
import { SearchBarComponent } from './components/section-13/search-bar/search-bar.component';
import { PageListComponent } from './components/section-13/page-list/page-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './components/section-17/photo/photo.component';
@NgModule({
  declarations: [
    AppComponent,
    SectionTwoComponent,
    CardsComponent,
    TypingComponent,
    PipesComponent,
    ConvertPipe,
    PagesComponent,
    ClassDirective,
    TimesDirective,
    CompsComponent,
    HomeComponent,
    NotFoundComponent,
    SearchBarComponent,
    PageListComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CollectionModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

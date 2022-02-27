import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { CardsComponent } from './components/section-3/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionTwoComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

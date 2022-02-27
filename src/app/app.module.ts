import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { CardsComponent } from './components/section-3/cards/cards.component';
import { TypingComponent } from './components/section-4/typing/typing.component';
import { PipesComponent } from './components/section-5/pipes/pipes.component';
import { ConvertPipe } from './components/pipes/convert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SectionTwoComponent,
    CardsComponent,
    TypingComponent,
    PipesComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

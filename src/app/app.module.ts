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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhotoComponent } from './components/section-17/photo/photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardFormsComponent } from './components/section-18/card-forms/card-forms.component';
import { InputComponent } from './components/section-18/input/input.component';
import { CardComponent } from './components/section-18/card/card.component';
import { EmailFormComponent } from './components/section-19/email-form/email-form.component';
import { EquationComponent } from './components/section-20/equation/equation.component';
import { AnswerHighlightDirective } from './components/section-20/answer-highlight.directive';
import { SigninComponent } from './components/section 21/auth/signin/signin.component';
import { SignupComponent } from './components/section 21/auth/signup/signup.component';
import { AuthModule } from './components/section 21/auth/auth.module';
import { AuthHttpInterceptor } from './components/section 21/auth-http-interceptor';
import { SignoutComponent } from './components/section 21/auth/signout/signout.component';

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
    CardFormsComponent,
    InputComponent,
    CardComponent,
    EmailFormComponent,
    EquationComponent,
    AnswerHighlightDirective,
    SigninComponent,
    SignupComponent,
    SignoutComponent,  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
   // CollectionModule,
    AppRoutingModule,
    AuthModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

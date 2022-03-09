import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplayComponent } from './email-replay/email-replay.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent, 
    EmailReplayComponent,
    EmailReplyComponent, 
    EmailIndexComponent, 
    EmailShowComponent, 
    PlaceholderComponent,
    NotFoundComponent, 
    EmailFormComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }

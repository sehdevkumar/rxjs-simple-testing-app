import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { FormsModule } from '@angular/forms';
import { FormatDirective } from './directives/format.directive';
import { MailingPipe } from './pipes/mailing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    FormatDirective,
    MailingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';

// import { registerLocaleData } from '@angular/common';
// import localeEs from '@angular/common/locales/es';

// // the second parameter 'ES' is optional
// registerLocaleData(localeEs, 'ES');

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

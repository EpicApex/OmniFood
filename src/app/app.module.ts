import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { IntroNavComponent } from './intro/intro-nav/intro-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    IntroNavComponent,
    NavTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

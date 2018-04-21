import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { IntroNavComponent } from './intro/intro-nav/intro-nav.component';
import { IntroNavTopRightComponent } from './intro/intro-nav-top-right/intro-nav-top-right.component';
import { SectionFeaturesComponent } from './section-features/section-features.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    IntroNavComponent,
    IntroNavTopRightComponent,
    SectionFeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

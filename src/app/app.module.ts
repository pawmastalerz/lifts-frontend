import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderContactComponent } from './header/header-contact/header-contact.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItem1Component } from './carousel/carousel-item1/carousel-item1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContactComponent,
    HeaderLogoComponent,
    NavbarComponent,
    CarouselComponent,
    CarouselItem1Component
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

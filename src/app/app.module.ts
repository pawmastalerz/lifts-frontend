import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderContactComponent } from './header/header-contact/header-contact.component';
import { HeaderLogoComponent } from './header/header-logo/header-logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItem1Component } from './carousel/carousel-item1/carousel-item1.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tiles/tile/tile.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContactComponent,
    HeaderLogoComponent,
    NavbarComponent,
    CarouselComponent,
    CarouselItem1Component,
    TilesComponent,
    TileComponent,
    BannerComponent,
    FooterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRr_9WjuUjD6f_fVXu14-GgFX81gEAzBU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

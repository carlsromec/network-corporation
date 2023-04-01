import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeccionVisionMisionObjetivosComponent } from './seccion-vision-mision-objetivos/seccion-vision-mision-objetivos.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { SeccionServicioComponent } from './seccion-servicio/seccion-servicio.component';
import { SeccionContactoComponent } from './seccion-contacto/seccion-contacto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SeccionVisionMisionObjetivosComponent,
    HeaderComponent,
    BannerComponent,
    SliderComponent,
    SeccionServicioComponent,
    SeccionContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

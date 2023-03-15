import { LandingPageModule } from './Pages/landing-page/landing-page.module';
import { FooterModule } from './Components/footer/footer.module';
import { HeaderModule } from './Components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormModule } from './Pages/contact-form/contact-form.module';
import { HomeModule } from './Pages/home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactFormModule,
    HeaderModule,
    FooterModule,
    LandingPageModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

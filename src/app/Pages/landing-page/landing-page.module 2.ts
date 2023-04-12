import { ContactFormModule } from './../contact-form/contact-form.module';
import { FooterModule } from './../../Components/footer/footer.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeaderModule } from 'src/app/Components/header/header.module';
import { CookiesModule } from 'src/app/Components/cookies/cookies.module';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    ContactFormModule,
    CookiesModule
  ]
})
export class LandingPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FooterModule } from "../../Components/footer/footer.module";
import { HeaderModule } from "../../Components/header/header.module";
import { ContactFormModule } from "../contact-form/contact-form.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FooterModule,
        HeaderModule,
        ContactFormModule
    ]
})
export class HomeModule { }

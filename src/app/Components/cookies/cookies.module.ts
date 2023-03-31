import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesComponent } from './cookies.component';

@NgModule({
    declarations: [
        CookiesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CookiesComponent
    ]
})
export class CookiesModule { }

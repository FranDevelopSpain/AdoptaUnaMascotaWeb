import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesComponent } from './cookies.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CookiesComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CookiesComponent
    ]
})
export class CookiesModule { }

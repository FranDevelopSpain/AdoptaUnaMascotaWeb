import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPolicyComponent } from './cookies-policy.component';

@NgModule({
    declarations: [ CookiesPolicyComponent],
    imports: [ CommonModule ],
    exports: [CookiesPolicyComponent],
    providers: [],
})
export class CookiesPolicyModule {}
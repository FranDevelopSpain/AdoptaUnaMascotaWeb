import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { FooterModule } from 'src/app/Components/footer/footer.module';

@NgModule({
    declarations: [BlogComponent],
    imports: [ CommonModule, FooterModule ],
    exports: [BlogComponent],
    providers: [],
})
export class BlogModule {}
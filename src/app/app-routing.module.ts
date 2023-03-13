import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactFormComponent } from './Pages/contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: '',
  redirectTo:'form',
  pathMatch: 'full'
 },
 
 {
  path: 'form',
  component: ContactFormComponent
 },

 {
  path: 'header',
  component: HeaderComponent
 },

 {
  path: 'footer',
  component: FooterComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

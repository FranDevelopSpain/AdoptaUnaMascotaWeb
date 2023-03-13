import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path: '',
  redirectTo:'landing',
  pathMatch: 'full'
 },

 {
  path: 'landing',
  component: LandingPageComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

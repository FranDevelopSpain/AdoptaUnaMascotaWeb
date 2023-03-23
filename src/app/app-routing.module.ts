import { ContactFormComponent } from './Pages/contact-form/contact-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/ContactUs/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';

const routes: Routes = [

  {//Página que se cargará por defecto si no se especifica ruta
    path: "",
    redirectTo: "landingPage",
    pathMatch: "full"
  },

  {
    path: "landingPage",
    component: LandingPageComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },

      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "contactUs",
        component: ContactUsComponent
      },
    
      {
        path: "aboutUs",
        component: AboutUsComponent
      },

      {
        path: "formularioAdopcion",
        component: ContactFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

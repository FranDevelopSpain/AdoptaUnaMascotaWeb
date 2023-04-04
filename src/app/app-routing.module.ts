import { ContactFormComponent } from './Pages/contact-form/contact-form.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/ContactUs/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { PrivacyPolicyComponent } from './Pages/privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './Pages/cookies-policy/cookies-policy.component';
import { FaqsComponent } from './Pages/faqs/faqs.component';

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
      },
      {
        path: "politica-privacidad",
        component: PrivacyPolicyComponent
      },
      {
        path: "politica-cookies",
        component: CookiesPolicyComponent
      },
      {
        path: "faqs",
        component: FaqsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

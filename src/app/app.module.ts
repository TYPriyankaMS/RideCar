import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { loadInternal } from '@angular/core/src/render3/util';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { HomepageModule } from './homepage/homepage.module';
import { SecurityGuard } from './security.guard';
import { CartComponent } from './homepage/cart/cart.component';
import { OffersComponent } from './homepage/offers/offers.component';
import { PaymentComponent } from './homepage/payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RideCarRoutingModule } from './ride-car-routing/ride-car-routing.module';



let routes:Routes=[

  { path:"register",component:RegistrationComponent },
  {path:"login" , component:LoginComponent},
  {path:"home" , component:HomepageComponent,canActivate:[SecurityGuard],children:[
    {component:CartComponent,path:"cart"},
    {component:PaymentComponent,path:"payment"},
    {path:"offers",component:OffersComponent},
    {path:"**",redirectTo:"offers"} 
   
  ]
},
  {path:"**", redirectTo:"login"}

]

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RegistrationModule,
    LoginModule,
    HomepageModule,
    BrowserAnimationsModule,
    RideCarRoutingModule
    
  ],
  providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OffersComponent } from './offers/offers.component';
import { RouterModule } from '@angular/router';
import  {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, CartComponent, PaymentComponent, OffersComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatRadioModule,
    FormsModule

  ]
})
export class HomepageModule {
 }

import { Component, OnInit } from '@angular/core';
import { OffersService } from './offers.service';
import { CartService } from '../cart/cart.service';
import { createViewContainerData } from '@angular/core/src/view/refs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
carData
  constructor(private service:OffersService,private cart:CartService) { }

  ngOnInit() {
     
    this.service.getZoomCar().subscribe((data)=>{
      this.carData=data['result'][1].cars;
      this.carData.forEach(car=>car.price=1500)
         } )
  }
  //adding cars to cart
  count
  addToCart(car){
    console.log(car)
    let index=this.cart.cartItems.findIndex(cartCar=>cartCar.name==car.name)
    if(index==-1){
    this.cart.cartItems.push(car)
    this.count=this.cart.cartItems.length
    console.log(this.cart.cartItems)
    }else{
      alert("car is already present in the cart")
    }
  }

}

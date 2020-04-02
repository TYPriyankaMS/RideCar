import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart
  total
  constructor(private _service:CartService,private router:Router) {
    this.cart=_service.cartItems
   }
   calculateTotal(){
      this.total=0
    this.cart.forEach(car => {
      this.total=this.total+car.price
    });
  }
  navigateToPayment(){
    this.router.navigate(["home/payment"])
  }
  

  ngOnInit() {
    this.calculateTotal()
    
  }
  remove(carName){
    //step1 find  the index
    let index=this.cart.findIndex( car=> car.name==carName)

    //step2 use splice
    this.cart.splice(index,1)
    this.calculateTotal()
    /*this.cart.forEach( (car)=>{
      if(car.name==carName)
      this.cart.splice(this.cart.indexOf(car),1)
    })
    */
  }

}

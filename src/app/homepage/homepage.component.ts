import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  //navigate 
  navigateToCart(){
    console.log("navigating to cart")
    this.router.navigate(["home/cart"])
  }
  navigateToOffer(){
    this.router.navigate(["home/offers"])
  }
  
  //logout implementation
  logout(){
    sessionStorage.clear();
    this.router.navigate(["/login"])
  
  
  }

}

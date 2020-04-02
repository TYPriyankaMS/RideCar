import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RideCar';
  constructor(private router:Router){

  }

  ngOnInit(){
    let user=sessionStorage.getItem("user")
    if(user!=null){
      this.router.navigate(["/home"])
    }
  }
}

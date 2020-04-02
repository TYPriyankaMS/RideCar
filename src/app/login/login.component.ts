import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder:FormBuilder,private router:Router) { }
  loginGroup
  showError
  ngOnInit() {


    this.loginGroup=this.builder.group({
      emailId:['',[Validators.required]],
      password:['',[Validators.required]],
    })
 
  }
  
 
  routeToRegistration(){
    this.router.navigate(["/register"])

    
  }
  login(){
    console.log(this.loginGroup.value)
    let userString=localStorage.getItem(this.loginGroup.value.emailId)
    console.log(userString)
    if(userString!=null){
      let userObj=JSON.parse(userString)
      //authentication logic
      console.log(userObj,this.loginGroup.value.emailId,this.loginGroup.value.password)
      if(userObj.emailId==this.loginGroup.value.emailId && userObj.password==this.loginGroup.value.password){
        
        //setting the session storage for security
        
        sessionStorage.setItem("user",this.loginGroup.value.emailId)
      
        this.router.navigate(["/home"])
      }else{
        this.showError=true
      }
    }else{
      this.showError=true
    }
  }

}

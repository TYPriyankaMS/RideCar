import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customValidator } from './Validation';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private builder:FormBuilder,private router:Router) {
   }
   registrationGroup

  ngOnInit() {

    this.registrationGroup=this.builder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      mobileNumber:[0,[Validators.required]],
      emailId:['',[Validators.required, Validators.email]],
      DLNumber:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]]

    },{validator:customValidator})
  

  }
  submit(){
    console.log(this.registrationGroup.value)
    let userString=JSON.stringify(this.registrationGroup.value)
    localStorage.setItem(/*"user" if we use this it get overrided*/this.registrationGroup.value.emailId,userString)
    this.router.navigate(["/login"])
  
  
  }

} 

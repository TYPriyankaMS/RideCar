import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  
    
  generateCaptcha(){
    let alpha=["A","B","c","D","E","F","G","H","I","J","K","l","M","N","O","P","q","R","S","T","U","V","X","Y","Z"]
    
    let num=""
    for(let i=0;i<6;i++){
      num=num+Math.floor(Math.random()*10)
    }
    return ""+num[0]+num[1]+alpha[num[2]]+num[3]+alpha[num[4]]+alpha[num[5]]

    console.log(num)
    // let num=Math.random()*10
   // let captchaVal=Math.floor(num)
    //console.log(captchaVal)
    
  }
  captcha

  refreshCaptcha(){
    this.captcha=this.generateCaptcha()
  }
  showError

  ngOnInit() {
   this.captcha= this.generateCaptcha()
   
  }
  enteredCaptcha
  validateCaptcha(){
  console.log(this.enteredCaptcha)
  console.log(this.captcha)
    if(this.enteredCaptcha==this.captcha){
      this.showError=false
      alert("payment successful")
    }else{
      this.showError=true
      this.refreshCaptcha()
    }
  }

}

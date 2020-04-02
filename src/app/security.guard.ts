import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
path:ActivatedRouteSnapshot[];
route:ActivatedRouteSnapshot;
  constructor(private router:Router){
  }
  canActivate(next:ActivatedRouteSnapshot,state: RouterStateSnapshot){
    console.log("inside security gaurd")
    let user=sessionStorage.getItem("user")
    console.log(user)
    if(user!=null){
      return true;
    }
else{
  console.log("login")
  this.router.navigate(["/login"]) 
}
  }
}


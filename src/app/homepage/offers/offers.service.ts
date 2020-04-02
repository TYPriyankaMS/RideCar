import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http:HttpClient) { }

  getZoomCar(){
   return this.http.get("https://raw.githubusercontent.com/Harsh-gitx/WheelsOnRoads/master/zoomcar.json")
  }
  ngOnInit(){
    
  }
}

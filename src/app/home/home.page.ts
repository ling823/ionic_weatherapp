import { Component , OnInit} from '@angular/core';
import { HttpService } from '../http.service';
import { Geolocation } from '@ionic-native/geolocation/ngx'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    weathers = []
	city : string =""
  constructor(public httpService:HttpService,
              public geolocation:Geolocation) {}

  ngOnInit(){
    this.geolocation.getCurrentPosition().then((resp) =>{
         console.log(resp.coords.latitude)
         console.log(resp.coords.longitude)
         this.httpService.getWeatherByGeo(resp.coords.latitude,resp.coords.longitude)
         .subscribe(resp=>{
           console.log(resp)
           this.city = resp["city"]["name"]
           this.weathers = resp["list"]
         },err=>{
           console.log(err)
         })

    }).catch((error) => {
       console.log('Error getting location', error);
    });

  }

  retrieveWeather(){
  	

  	console.log(this.city)
  	this.httpService.getWeather(this.city).subscribe(resp=>{
         // console.log(resp);
         this.weathers = resp["list"];
  	},err=>{
          console.log(err);
  	})
  }

}

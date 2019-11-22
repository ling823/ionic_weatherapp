import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	
	baseUrl = "http://api.openweathermap.org"
	apiKey = "9fd7a449d055dba26a982a3220f32aa2"
	weathers

  constructor(public httpClient:HttpClient) { 
  }
  getWeather(city){
  	return this.httpClient.get(`${this.baseUrl}/data/2.5/forecast/daily?q=${city}&cnt=10&appId=${this.apiKey}`)
  	.pipe(
  		(tap(x=>{
  			this.weathers = x["list"]
  		})
  		))
  }

  getWeatherByGeo(lat,long){
  	return this.httpClient.get(`${this.baseUrl}/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=10&appId=${this.apiKey}`)
  	.pipe(
  		(tap(x=>{
  			this.weathers = x["list"]
  		})
  		)) 

  }
  getWeatherByDt(dt){
  	return this.weathers.filter(weather=>{
  		return weather.dt == dt
  	})[0]
  }
}

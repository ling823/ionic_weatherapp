import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
	weather

  constructor(public route:ActivatedRoute,
  	          public httpService:HttpService) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		let dt = params['dt'];
  		console.log(dt); // Print the parameter to the console.
  		this.weather = this.httpService.getWeatherByDt(dt)
  		console.log(this.weather);
  	});
  }

}

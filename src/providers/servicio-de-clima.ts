import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicioDeClima provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ServicioDeClima {

	direccionWeb= 'http://api.openweathermap.org/data/2.5/forecast/daily?'+
	'id=3991347&appid=7807061eeecbd0d239a8e30a03938ce1&units=metric'

  constructor(public http: Http) {
    console.log('Hello ServicioDeClima Provider');
  }

  getPronosticos(){
  	return this.http.get(this.direccionWeb)
  	.map(res=>res.json())

  }

} 

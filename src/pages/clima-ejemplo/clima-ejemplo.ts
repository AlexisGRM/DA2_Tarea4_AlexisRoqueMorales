import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicioDeClima } from '../../providers/servicio-de-clima';

/*
  Generated class for the ClimaEjemplo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clima-ejemplo',
  templateUrl: 'clima-ejemplo.html'
})
export class ClimaEjemploPage {
	pronosticos:any[];
	informacionCiudad;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public _servicioClima: ServicioDeClima) {}
ionViewDidLoad() {
    console.log('ionViewDidLoad ClimaPage');
    this._servicioClima.getPronosticos().subscribe(
      (data:any)=>{

        let contador=0;
        this.pronosticos=data.list;
       
        for(let dia of this.pronosticos){
          dia.fecha=new Date();
          dia.fecha.setDate(dia.fecha.getDate()+contador)
          contador++;
          
        }
      },(err)=>{
        console.log(err);
      }
      )
  }



}

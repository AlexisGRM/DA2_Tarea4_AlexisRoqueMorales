import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Producto} from '../productos/productoClass';
import {ProductoService} from '../../providers/producto-service'
/*
  Generated class for the CrearProductos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-crear-producto',
  templateUrl: 'crear-productos.html'
})
export class CrearProductoPage {
nuevoProducto:Producto = new Producto();
  constructor(public navCtrl: NavController, public navParams: NavParams,private _ProductoService:ProductoService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearProductoPage');
  }
  guardarProducto(){
  	this._ProductoService
    .addProducto(this.nuevoProducto)
    .subscribe(
  		(data)=>{
  			var funciono=data.funciono;
  			if(funciono){
  				//redireccionar 
  				
  			}
  		},
  		(err)=>{}
  		);
  }

}

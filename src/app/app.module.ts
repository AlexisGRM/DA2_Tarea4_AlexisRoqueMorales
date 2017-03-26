import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ClimaEjemploPage } from '../pages/clima-ejemplo/clima-ejemplo';
import { TabsPage } from '../pages/tabs/tabs';
import { ServicioDeClima } from '../providers/servicio-de-clima';
import { ProductoPage } from '../pages/productos/productos';
import { ProductoService } from '../providers/producto-service';
import { CrearProductoPage } from '../pages/crear-productos/crear-productos';

ProductoService
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ClimaEjemploPage,
    ProductoPage,
    CrearProductoPage,   
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ProductoPage,
    ClimaEjemploPage,
    CrearProductoPage,
 
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},ServicioDeClima,ProductoService]
})
export class AppModule {}

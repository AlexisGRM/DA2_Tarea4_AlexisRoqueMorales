import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ClimaEjemploPage} from '../clima-ejemplo/clima-ejemplo';
import { ProductoPage } from '../productos/productos';
import { CrearProductoPage } from '../crear-productos/crear-productos';
  

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = ClimaEjemploPage;
  tab5Root: any = ProductoPage;
  tab6Root: any = CrearProductoPage;

  constructor() {

  }
} 

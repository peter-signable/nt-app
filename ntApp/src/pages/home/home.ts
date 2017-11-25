import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Quagga from 'quagga';

declare var Quagga:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;


  constructor(public navCtrl: NavController) {

  }
}

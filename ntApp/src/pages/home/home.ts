import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Quagga from 'quagga';

declare var Quagga:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
}

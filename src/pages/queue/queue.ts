import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-queue',
  templateUrl: 'queue.html'
})
export class QueuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  removeDiv() {
    var div:HTMLElement =   document.getElementById("Raza");
    div.style.textDecoration="line-through";
  }
}

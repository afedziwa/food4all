import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var window;
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  callIT(passedNumber){
    //You can add some logic here
     window.location = passedNumber;
    }

}

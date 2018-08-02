import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http ,Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

    name ;
    building;
    facebook;
    site ;
    contact;
    email;
    
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
      this.name=navParams.get('name');
      this.building=navParams.get('building');
      this.site=navParams.get('site');
      this.contact=navParams.get('contact');
      this.email=navParams.get('email');
      this.facebook=navParams.get('facebook');

      console.log(this.name,this.email);
    }


 
    
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
     
     
  }

}

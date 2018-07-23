import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import {Http ,Headers} from '@angular/http'
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    url :string;
    data : string;
     names;
    constructor(public http: Http,public navCtrl: NavController) {
      this.loadUser();
  }

  goToDetails(names): void { 
    this.names =names||'no name';
  this.navCtrl.push(DetailsPage,{name :names} );
}

loadUser(){
  this.http.get('https://randomuser.me/api/?results=50')
           .map(res=>res.json())
           .subscribe(data =>{
             this.data=data.results;
             console.log(data.results);
           },err =>{
             console.log(err);
           }) 

}


  

}

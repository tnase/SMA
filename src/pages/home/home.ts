import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import {Http ,Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  headers = new Headers({'user-key': '1234567890123'});
  options = new RequestOptions ({headers: this.headers}); 
    url :string;
    data : string;
     names;

    constructor(public http: Http,public navCtrl: NavController) {
      this.loadUser();
  }

  goToDetails(names,contact,email,building,facebook,site): void { 
    this.names =names||'no name';
    console.log(contact,email,site,names,building);
   this.navCtrl.push(DetailsPage,{name :names,contact:contact,email:email,building:building,facebook:facebook,site:site});
}

loadUser(){
  this.http.get('/json/schoolList.json',this.options)
           .map(res=>res.json())
           .subscribe(data =>{
             this.data=data.results;
             console.log(this.data);
           },err =>{
             console.log(err);
           }) 

}


  

}

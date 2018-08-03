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
    data : any;
    quartiers =[];
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
             for(var entry=0;entry<this.data.length ;entry++){
                 this.quartiers.push(this.data[entry].localisatoin);
                 
              }
              // teste de reception des quartiers
              console.log("+++"+this.quartiers); 
           },err =>{
             console.log(err);
           })
 
}

  getItems(ev: any) {
    // Reset items back to all of the items
    this.loadUser();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.quartiers = this.quartiers.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  

}

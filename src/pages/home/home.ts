import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import {Http ,Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import { SearchPipe } from '../../pipes/search/search';
import { SortPipe } from '../../pipes/sort/sort';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  headers = new Headers({'user-key': '1234567890123'});
  options = new RequestOptions ({headers: this.headers}); 
    url :string;
    data : any;
    names;
    descending: boolean = false;
    order: number;
    column: string = 'name';
    loadItem :boolean = false;

    constructor(public http: Http,public navCtrl: NavController,public loadingCtrl: LoadingController) {
      this.loadUser();
     
  }



  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
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
             this.loadItem=true;
             console.log(this.data);
           },err =>{
             console.log(err);
           })
 
}

sort(){
  this.descending = !this.descending;
  this.order = this.descending ? 1 : -1;
}


  

}

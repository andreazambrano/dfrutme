import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { InfoInterface } from '../../models/info-interface'; 
import { TixInterface } from '../../models/tix-interface'; 
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  constructor(
     private dataApi: DataApiService,
     public _uw:UserWService,
        private router: Router, 
    private location: Location, 
    private authService: AuthService
  	) { }

    public tixs:TixInterface;
   public tix:TixInterface;
      public tixStock:TixInterface;
   
  info:any={};
    public isLogged =false;
  loadAPI = null;  
  url = "assets/dist-assets/js/scripts/dashboard.v1.script.min.js";
       url2 = "assets/dist-assets/js/plugins/datatables.min.js";
    url3 = "assets/dist-assets/js/scripts/datatables.script.min.js";
    url4 = "assets/dist-assets/js/plugins/sweetalert2.min.js";
    url5 = "assets/dist-assets/js/scripts/sweetalert.script.min.js";

public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
       public loadScript2() {
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
           public loadScript3() {
      let node = document.createElement("script");
      node.src = this.url3;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

      public loadScript4() {
      let node = document.createElement("script");
      node.src = this.url4;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
      public loadScript5() {
      let node = document.createElement("script");
      node.src = this.url5;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }


       loadInfo(){
    this.dataApi
    .getInfo()
    .subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.info=res;
        this._uw.info=this.info;
        }
     });
  }  




enable(tix){
	this.tixStock=tix;
	this.tixStock.stockStatus=true;  let id = tix.id;
	this.dataApi.updateTixStock(this.tixStock, id)
        .subscribe(
          // tix => this.router.navigate(['/succesConfig'])
      );

}
disable(tix){
this.tixStock=tix;
	this.tixStock.stockStatus=false;  let id = tix.id;
	this.dataApi.updateTixStock(this.tixStock, id)
        .subscribe(
          // tix => this.router.navigate(['/succesConfig'])
      );
}

  getAllTixs(){
    // this.mostrar="Todos";
    this.dataApi
    .getAllTixs()
    // .subscribe((tixs: TixInterface) => (this.tixs=tixs));
    .subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.tixs=res;
        this._uw.tamanoProducts=res.length;
        }
     });
  }
  ngOnInit() {

     if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
            this.loadScript2();
             this.loadScript3();
              this.loadScript4();
               this.loadScript5();
           });
        }
     this._uw.loaded=true;	this.getAllTixs();
     // this.loadInfo();
     // this.getOrders();
  }

}

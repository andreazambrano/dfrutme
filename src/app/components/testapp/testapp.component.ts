import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { InfoInterface } from '../../models/info-interface'; 
import { OrderInterface } from '../../models/order-interface'; 
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css']
})
export class TestappComponent implements OnInit {

  constructor(
     private dataApi: DataApiService,
     public _uw:UserWService

     ) { }
  public orders:OrderInterface;
   public order:OrderInterface;
  info:any={};
  loadAPI = null;  
  url = "assets/dist-assets/js/scripts/dashboard.v1.script.min.js";
 setColp(){
    this.loadInfo();
    this._uw.currency=this._uw.info[0].colp;
  }
  setBs(){
    this.loadInfo();
    this._uw.currency=this._uw.info[0].bs;
  }
   setUsd(){
    this.loadInfo();
    this._uw.currency=this._uw.info[0].usd;
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
    public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

 getOrderPending(){
        this.dataApi
        .getOrderPending()
        .subscribe((orders: OrderInterface) => (this.orders=orders));
    }
     getOrders(){
        this.dataApi
        .getOrders()
        .subscribe((orders: OrderInterface) => (this.orders=orders));
    }

  ngOnInit() {
     if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
           });
        }
     this._uw.loaded=true;
     this.loadInfo();
     this.getOrders();
  }

}

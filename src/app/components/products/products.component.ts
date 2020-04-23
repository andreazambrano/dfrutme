import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { InfoInterface } from '../../models/info-interface'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
  	public _uw:UserWService,
  	private dataApi: DataApiService
  	) { }
    info:any={};
    mostrar="todos";
  public tixs:TixInterface;
  public tixsVegetales:TixInterface;
  public tixsFrutas:TixInterface;
  public tixsExquiciteces:TixInterface;
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
  getAllTixs(){
    this.mostrar="Todos";
    this.dataApi
    .getAllTixs()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
  getBulbos(){
    this.mostrar="Bulbos";
    this.dataApi
    .getBulbos()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
   getFrutos(){
    this.mostrar="Frutos";
    this.dataApi
    .getFrutos()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
  getLegumbres(){
    this.mostrar="Legumbres";
    this.dataApi
    .getLegumbres()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
  getTuberculos(){
    this.mostrar="Tubérculos";
    this.dataApi
    .getTuberculos()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
  getVerduras(){
    this.mostrar="Verduras";
    this.dataApi
    .getVerduras()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
   

  ngOnInit() {
if (this._uw.loadedInfo==true){
        this.loadInfo();
        }
        this._uw.loadedInfo=true;
	this.getAllTixs();
  }

}

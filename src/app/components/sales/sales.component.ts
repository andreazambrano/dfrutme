import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { SaleInterface } from '../../models/sale-interface'; 
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(
     private dataApi: DataApiService,
     public _uw:UserWService
  	) { }
    public sales:SaleInterface;
   public sale:SaleInterface;
  getSales(){
        this.dataApi
        .getSales()
        .subscribe((sales: SaleInterface) => (this.sales=sales));
    }
  ngOnInit() {
     this.getSales();
  }

}

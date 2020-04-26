import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { OrderInterface } from '../../models/order-interface';
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    public _uw:UserWService,
    private location: Location,
    private router: Router
  	) { }
    
    public orders:OrderInterface;
    public order:OrderInterface;
    // orders: Observable<any>;
    // order: Observable<any>;
  
 
    getOrders(){
        this.dataApi
        .getOrders()
        .subscribe((orders: OrderInterface) => (this.orders=orders));
    }
  
  ngOnInit() {
     this.getOrders();
  }

  setId(order,indice,tamano){
    this._uw.orderSelected=order;
    this._uw.idSelected=order.id;
    this._uw.tamano=tamano;
    this._uw.indice=indice;
    this.router.navigate(['/orderdetail']);
  }

}

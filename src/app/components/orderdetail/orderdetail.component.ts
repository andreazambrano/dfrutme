import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { OrderInterface } from '../../models/order-interface';
import { UserWService } from "../../services/user-w.service";
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { isError } from "util";

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {

  constructor(
    public _uw:UserWService,
    private dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  	) { }
    public orders:OrderInterface;
    public order:OrderInterface;  

  getOrders(){
        this.dataApi
        .getOrders()
        .subscribe((orders: OrderInterface) => (this.orders=orders));
    }

  ngOnInit() {
    this.getOrders();  	   
    this.getDetails(this._uw.idSelected);
  }

    getDetails(id: string){
    this.dataApi.getOrderById(id).subscribe(order => (this._uw.orderSelected = order));
  }

}

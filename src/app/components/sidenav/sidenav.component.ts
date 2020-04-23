import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(  public _uw:UserWService
     ) { }
   loadAPI = null;  
    url = "assets/dist-assets/js/plugins/metisMenu.min.js";
  ngOnInit() {   
   this._uw.tixPreview.quantity=1;
 if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadScript();
          });
        }
        this._uw.loaded=true;
  }
      public loadScript() {
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
}

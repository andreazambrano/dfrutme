import {RouterModule,Routes} from '@angular/router';
import {
	AdminComponent,
	FooterComponent,
	ProductsComponent,
	ProductdetailComponent,
	TestappComponent,
	SidenavComponent,
	ConfigComponent,
	OrdersComponent,
	MiniorderComponent,
	OrderdetailComponent,
	FullorderdetailComponent,
	AddproductComponent,
	SuccessComponent,
	ListproductsComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'admin',component:AdminComponent},
	{path:'footer',component:FooterComponent},
	{path:'products',component:ProductsComponent},
	{path:'productdetail/:id',component:ProductdetailComponent},
	{path:'config',component:ConfigComponent},
	{path:'sidenav',component:SidenavComponent},
	{path:'orders',component:OrdersComponent},
	{path:'miniorder',component:MiniorderComponent},
	{path:'orderdetail',component:OrderdetailComponent},
	{path:'fullorderdetail',component:FullorderdetailComponent},
	{path:'addproduct',component:AddproductComponent},
	{path:'success',component:SuccessComponent },
	{path:'listproducts',component:ListproductsComponent },
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);


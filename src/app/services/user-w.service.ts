import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWService {
	admin:boolean;
	adminName:string;
	antPedido:string;
	affiliate:boolean;
	assBook:any={};
	assValidation:any={};
	bandera:string;
	book:any={};
	bookToCancel:any={};
	botas:boolean=false;
	car:any[]=[];
	card:any={};
	cardsResult:any[]=[];
	currency:number=1;
	editingTrek:boolean=false;
	errorFormAffiliate:boolean;
	errorFormAddtixs:boolean;
	errorFormPartner:boolean;
	errorFormCurrency:boolean;
	errorFormPorcentaje:boolean;
	errorFormAddress:boolean;
	errorFormCostPrice:boolean;
	errorFormBeneficio:boolean;
	errorFormStock:boolean;
	footer:boolean=true;
	file:any[]=[];
	foredit:any={};
	idCard:string;
	idOrder:string;
	idPedidoActual:string;
	idSelected:string;
	imagePreviewProduct:string;
	images:any[]=[];
	indice:number=0;
	info:any={};
	isLogged:boolean=false;
	loaded:boolean=false;
	loadedInfo:boolean=false;
	moccs:boolean=false;
	name:string;
	numProd:number=0;
	partner:boolean;
	positionOrder:string;
	queue:any[]=[];
	ruta:string;
	orderSelected:any[]=[];
	selectorA:boolean;
	selectorB:boolean;
	sigPedido:string;
	subTotal:number=0;
	tamano:number=0;
	tamanoPedidos:number=0;
	tixs:any[]=[];
	tixPreview:any={};
	tixsOrigin:any[]=[];
	tixsDiscount:any={};
	tixsNew:any={};
	total:number=0;
	totalBooks:number;
	totalDiscount:number=0;
	totalNew:number=0;
	totalProducts:number=0;
	totalTixs:number;
	type:string;
	typeGlobal:boolean=false;
	typeSize:boolean=false;
	user:any={};
	userd:string;
	usersPending:boolean;
	userW:any[]=[];
	validation:any={};
	validationEmail:any={};
	validationToDelete:any={};
	zapatos:boolean=false;
	// book:any[]=[];
  constructor() { }
}



import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
//import { Product, ProductService } from '../products/product.service';
// import {Pipe,PipeTransform} from '@angular/core';
// import {FilterArrayPipe} from '../filter.pipe'; 
//import { Observable } from 'rxjs/Observable';
//import { NgFor } from 'angular2/common';
import { DynamicModule } from './dynamic.module';
import {CheckoutComponent} from '../checkout/checkout.component';
import { Product, ProductService } from '../products/product.service';

@Component({
  selector: 'cart-product',
  //inputs: ['items'],
  //directives: [NgFor],
  templateUrl: './cart.component.html',
  //template: ``,
  styleUrls: ['../products/product-list.component.css']
  //styles: [`table{border:2px solid black; display: table;}`]
})
export class CartComponent implements OnInit {    // implements OnInit {
    private items: any;
    private total: String;
    //console.log(items);
  //@Output() clicked=new EventEmitter<Product>();
  //products: Observable<Product[]>;
  //private products: Product[];
  //private items: Array<Product> = [];
//   private show = false;
//   private checkout = false
//   private showCheckout = false;
   private objectKeys = Object.keys;
//   private items = {};
//   private total = 0;
//   private email;
//   private checkoutObj = {};
  //private laptopQuantity = 0;
  //private iPadQuantity = 0;
  //private iRobotQuantity = 0;
  //private ironQuantity = 0;
  //private dryerQuantity = 0;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  
  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    this.items = JSON.parse(sessionStorage.getItem("shopList"));
    this.total = sessionStorage.getItem("total")
    console.log("shopList: " + this.items);
  }

  checkout() {
    this.target.clear();
    let compFactory = this.cfr.resolveComponentFactory(CheckoutComponent);

    this.target.createComponent(compFactory);
  }
//   addItem(product) {
//     console.log(product.name);
//     if(this.items[product.name]) {
//       this.items[product.name][1]++;
//     } else {
//       this.items[product.name] = [product.price,1];
//     }
//     this.total += product.price;
//     console.log(this.items[product.name]);
	  //this.items.push(product);
	  // switch(product.name) {
		//   case "laptop": laptopQuantity++; break;
		//   case "iPad": iPadQuantity++; break;
		//   case "iRobot": iRobotQuantity++; break;
		//   case "iron": ironQuantity++; break;
		//   case "dryer": dryerQuantity++; break;
	  // };
//   }
//   showCart() {
// 	  this.show = true;
//     this.checkout = true;
//     this.showCheckout = false;
//   }
//   checkOut() {
// 	  //this.show = false;
// 	  this.showCheckout = true;
//   }
//   placeOrder() {
//     this.checkoutObj[this.email] = this.items;
//     this.productService.sendEmail(this.checkoutObj);
//   }
}

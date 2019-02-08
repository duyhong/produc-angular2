import { Component, Input } from '@angular/core';
import { ProductService } from '../products/product.service';
// import {Pipe,PipeTransform} from '@angular/core';
// import {FilterArrayPipe} from '../filter.pipe'; 
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'checkout-product',
  templateUrl: './checkout.component.html',
  //template: ``,
  styleUrls: ['../products/product-list.component.css']
  //styles: [`table{border:2px solid black; display: table;}`]
})
export class CheckoutComponent {
  //@Output() clicked=new EventEmitter<Product>();
  //products: Observable<Product[]>;
  //private products: Product[];
  //private items: Array<Product> = [];
//   private show = false;
//   private checkout = false
//   private showCheckout = false;
//   private objectKeys = Object.keys;
  //private items = {};
  //private total = 0;
  private email;
  private checkoutObj = {};
  private addedProducts;
  private dbObj = {};
  
  constructor(private productService: ProductService) { }
  //constructor() { }

//   ngOnInit() {
// 	  this.productService.getProductsJson().subscribe(products=>(this.products=products));
// 	  //this.products = this.productService.getProductsJson();
//   }
//   addItem(product) {
//     console.log(product.name);
//     if(this.items[product.name]) {
//       this.items[product.name][1]++;
//     } else {
//       this.items[product.name] = [product.price,1];
//     }
//     this.total += product.price;
//     console.log(this.items[product.name]);
//   }
//   showCart() {
// 	this.show = true;
//     this.checkout = true;
//     this.showCheckout = false;
//   }
//   checkOut() {
// 	  //this.show = false;
// 	  this.showCheckout = true;
//   }
  placeOrder() {
    //this.addedProducts = JSON.parse(sessionStorage.getItem("addedProducts"));
    this.dbObj["customerEmail"] = this.email;
    this.dbObj["productPurchases"] = JSON.parse(sessionStorage.getItem("addedProducts"));
    this.checkoutObj[this.email] = JSON.parse(sessionStorage.getItem("shopList"));
    
    this.productService.sendEmail(this.checkoutObj);
    this.productService.savePurchase(this.dbObj);
  }
}

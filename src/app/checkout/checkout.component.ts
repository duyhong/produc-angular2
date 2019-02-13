import { Component, Input } from '@angular/core';
import { ProductService } from '../products/product.service';
import { OrderService } from '../orders/order.service';
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

  private email;
  private checkoutObj = {};
  //private addedProducts;
  private dbObj = {};
  
  constructor(private productService: ProductService, private orderService: OrderService) { }
  
  placeOrder() {
    //this.addedProducts = JSON.parse(sessionStorage.getItem("addedProducts"));
    this.dbObj["customerEmail"] = this.email;
    //this.dbObj["productPurchases"] = sessionStorage.getItem("addedProducts");
    this.dbObj["productPurchases"] = JSON.parse(sessionStorage.getItem("addedProducts"));
    //console.log("JSON.parse(sessionStorage.getItem(\"addedProducts\")) = " + JSON.parse(sessionStorage.getItem("addedProducts")));
    this.dbObj["total"] = JSON.parse(sessionStorage.getItem("total"));
    this.checkoutObj[this.email] = JSON.parse(sessionStorage.getItem("shopList"));
    
    this.productService.sendEmail(this.checkoutObj);
    this.orderService.savePurchase(this.dbObj);
  }
}

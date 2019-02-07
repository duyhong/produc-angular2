import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product, ProductService } from './product.service';
// import {Pipe,PipeTransform} from '@angular/core';
// import {FilterArrayPipe} from '../filter.pipe'; 
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  //template: ``,
  styleUrls: ['./product-list.component.css']
  //styles: [`table{border:2px solid black; display: table;}`]
})
export class ProductListComponent implements OnInit {
  @Output() clicked=new EventEmitter<Product>();
  //products: Observable<Product[]>;
  private products: Product[];
  //private items: Array<Product> = [];
  // private show = false;
  // private checkout = false
  // private showCheckout = false;
  //private objectKeys = Object.keys;
  private items = {};
  private total = 0;
  // private email;
  // private checkoutObj = {};
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
	  this.productService.getProductsJson().subscribe(products=>(this.products=products));
	  //this.products = this.productService.getProductsJson();
  }
  addItem(product) {
    console.log(product.name);
    if(this.items[product.name]) {
      this.items[product.name][1]++;
    } else {
      this.items[product.name] = [product.price,1];
    }
    this.total += product.price;
    sessionStorage.setItem("shopList", JSON.stringify(this.items));
    sessionStorage.setItem("total", ""+this.total);
    console.log(this.items[product.name]);
    console.log(this.items);
  }
  // showCart() {
	//   this.show = true;
  //   this.checkout = true;
  //   this.showCheckout = false;
  // }
  // checkOut() {
	//   //this.show = false;
	//   this.showCheckout = true;
  // }
  // placeOrder() {
  //   this.checkoutObj[this.email] = this.items;
  //   this.productService.sendEmail(this.checkoutObj);
  // }
}

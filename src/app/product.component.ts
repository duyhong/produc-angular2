import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product, ProductService } from './product.service';
import {Pipe,PipeTransform} from '@angular/core';
import {FilterArrayPipe} from './filter.pipe'; 
//import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //template: ``,
  styleUrls: ['./product.component.css']
  //styles: [`table{border:2px solid black; display: table;}`]
})
export class ProductComponent implements OnInit {
  @Output() clicked=new EventEmitter<Product>();
  //products: Observable<Product[]>;
  private products: Product[];
  //private items: Array<Product> = [];
  private show = false;
  private checkout = false
  private showCheckout = false;
  private objectKeys = Object.keys;
  private items = {};
  private total = 0;
  private email;
  private checkoutObj = {};
  //private laptopQuantity = 0;
  //private iPadQuantity = 0;
  //private iRobotQuantity = 0;
  //private ironQuantity = 0;
  //private dryerQuantity = 0;
  
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
    console.log(this.items[product.name]);
	  //this.items.push(product);
	  // switch(product.name) {
		//   case "laptop": laptopQuantity++; break;
		//   case "iPad": iPadQuantity++; break;
		//   case "iRobot": iRobotQuantity++; break;
		//   case "iron": ironQuantity++; break;
		//   case "dryer": dryerQuantity++; break;
	  // };
  }
  showCart() {
	  this.show = true;
    this.checkout = true;
    this.showCheckout = false;
  }
  checkOut() {
	  //this.show = false;
	  this.showCheckout = true;
  }
  placeOrder() {
    this.checkoutObj[this.email] = this.items;
    this.productService.sendEmail(this.checkoutObj);
  }
}

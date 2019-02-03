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
  private items: Array<Product> = [];
  private show = false;
  //checkout = false;
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
	  this.productService.getProductsJson().subscribe(products=>(this.products=products));
	  //this.products = this.productService.getProductsJson();
  }
  addItem(product) {
	  this.items.push(product);
  }
  showCart() {
	  this.show = true;
	  //this.checkout = true;
  }
}

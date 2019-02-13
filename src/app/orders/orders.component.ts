import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../orders/order.service';
import { Product, ProductService } from '../products/product.service';
import {NgbActiveModal, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IssuesComponent} from '../issues/issues.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private orders: Order[];
  private items: [];
  //private productJson;  
  private products: Array<Product> = [];
  private p: Product;
  private quantity;
  //private objectKeys = Object.keys;
  private closeResult: string;

  constructor(private orderService: OrderService, private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit() {
	  this.orderService.getPurchases().subscribe(orders=>(this.orders=orders));
  }

  productDetail(content, order) {
    //console.log("order = " + order);
    //console.log("order[\"_id\"] = " + order["_id"]);
    //this.items = JSON.parse(order["productPurchases"]);
    this.items = order["productPurchases"];
    console.log("order[\"productPurchases\"] = " + this.items);
    //console.log("order[\"productPurchases\"][\"name\"] = " + this.items["name"]);
    //console.log("JSON.parse(order[\"productPurchases\"]) = " + this.items);
    //console.log("JSON.parse(order[\"productPurchases\"])[\"name\"] = " + this.items[0]["name"]);
    //let key of objectKeys(items)
    //console.log("this.objectKeys(items) = " + this.objectKeys(this.items))
    this.products = [];
    for(let item in this.items) {
      //this.objectKeys(item).map(i => this.productJson =  i );
       console.log("item = " + item);
      // console.log("this.items[item] = " + this.items[item]);
      // console.log(JSON.parse(Object.entries(this.items[item])[0][0]));
      // for (const [key, value] of Object.entries(this.items[item])) {
      //   console.log(JSON.parse(key)["name"]);
      // }
      // console.log("Object.keys(item)[0] = " + Object.keys(item)[0]);
      // console.log("Object.values(item)[0] = " + Object.values(item)[0]);
      // for(let key in item) {
      //   console.log(" key:", key, "value:", item[key]);
      // }
      //console.log("item.name = " + item.name);
      // this.productJson = this.objectKeys(item);
      // console.log("this.objectKeys(item) = " + this.objectKeys(item));
      //console.log("item[objectKeys(item) = " + item[this.objectKeys(item)]);
      this.quantity = Object.entries(this.items[item])[0][1];
      console.log("Object.entries(this.items[item])[0][1] = " + Object.entries(this.items[item])[0][1]);
      this.p = Object.assign(new Product, JSON.parse(Object.entries(this.items[item])[0][0]));
      this.products.push(this.p);
      // console.log("this.products = " + this.products);
      // console.log("p.name = " + this.p.name);
      // console.log("this.objectKeys(item) = " + this.productJson);
      //console.log("JSON.parse = " + JSON.parse(item));
      //item.subscribe(productJson=>(this.productJson=productJson));
    }

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  reportIssue() {
    this.modalService.open(IssuesComponent, {
      size: 'lg'
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

// @Component({
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, World!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class NgbdModal2Content {
//   constructor(public activeModal: NgbActiveModal) {}
// }
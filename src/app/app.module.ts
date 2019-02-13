import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FilterArrayPipe} from './filter.pipe';
// import { HttpModule } from '@angular/http';
// import './rxjs-extensions';
// import {MdCardModule} from '@angular/material';
// import {MdButtonModule} from '@angular/material';
// import {MdDialogModule} from '@angular/material';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule, routableComponents, appRoutingProviders} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { CartComponent } from './shoppingCart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DynamicModule } from './shoppingCart/dynamic.module';
import { OrdersComponent} from './orders/orders.component';
import { OrderService } from './orders/order.service';
//import { OrderDetailComponent } from './order-detail/order-detail.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueService } from './issues/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    ProductListComponent,
    CartComponent,
    CheckoutComponent,
	  FilterArrayPipe,
	  OrdersComponent,
    //OrderDetailComponent,
    IssuesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
    HttpClientModule,
    DynamicModule.withComponents([CheckoutComponent]),
    NgbModule
    // BrowserAnimationsModule,
    // MdCardModule,
    // MdButtonModule,
    // MdDialogModule
  ],
  entryComponents: [
    IssuesComponent
  ],
  providers: [ProductService, OrderService, appRoutingProviders, NgbActiveModal, IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

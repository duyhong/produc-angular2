import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FilterArrayPipe} from './filter.pipe';
// import { HttpModule } from '@angular/http';
// import './rxjs-extensions';


import { AppRoutingModule, routableComponents, appRoutingProviders} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { CartComponent } from './shoppingCart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DynamicModule } from './shoppingCart/dynamic.module';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    ProductListComponent,
    CartComponent,
    CheckoutComponent,
	  FilterArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
    HttpClientModule,
    DynamicModule.withComponents([CheckoutComponent])
  ],
  providers: [ProductService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

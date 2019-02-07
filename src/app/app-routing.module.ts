import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { CartComponent } from './shoppingCart/cart.component'
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products', },
  { path: 'products', component: ProductListComponent },
  //{ path: 'characters/:id', component: CharacterComponent },
  { path: 'cart', component: CartComponent,
    children: [{ path: 'checkout', component: CheckoutComponent, outlet: 'checkout-route' }] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
  ProductListComponent,
  CartComponent,
  CheckoutComponent
];

export const appRoutingProviders: any[] = [

];
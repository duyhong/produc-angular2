import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/map'
//import { Http, Response } from '@angular/http';

export class Order {
	_id: string;
	dateOfPurchase: string;
	customerEmail: string;
	productPurchases: [];
	total: string;
}

@Injectable()
export class OrderService {
	constructor(private http: HttpClient) {
		
	}

	getPurchases() {
		return this.http.get<Order[]>('http://127.0.0.1:3000/purchase');
	}

	savePurchase(dbObj) {
		//let date = new Date().toLocaleDateString();
		//let purchase = new Purchase();
		const headers = new HttpHeaders().set('Content-Type', 'application/json');

		this.http.post('http://127.0.0.1:3000/purchase', JSON.stringify(dbObj),{headers: headers})
		.subscribe(data => {
			console.log("data = " + data);
		});
	}
}
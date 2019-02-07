import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/map'
//import { Http, Response } from '@angular/http';

export class Product {
	name: string;
	price: number;
	category: string;
	Rating: number;
}

@Injectable()
export class ProductService {
	constructor(private http: HttpClient) {
		
	}
	getProductsJson() {
		return this.http.get<Product[]>('http://127.0.0.1:3000/products');
		//return this.http.get('http://127.0.0.1:3000/products').pipe(map(productsData=>productsData));	
		//return this.http.get('http://127.0.0.1:3000/products').map((response: Response) => <Product[]>response.json());
	}

	sendEmail(mailContent) {
		//var emailid = mailContent["emailid"];
		//console.log("emailid = " + emailid);
		console.log("mailContent = " + mailContent);
		
		const headers = new HttpHeaders().set('Content-Type', 'application/json');
		this.http.post('http://127.0.0.1:8081/sendMail', JSON.stringify(mailContent),{headers: headers})
		.subscribe(data => {
			console.log("data = " + data);
		  });
	}
}
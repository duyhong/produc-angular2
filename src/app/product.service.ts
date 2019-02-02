import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

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
		//return this.http.get('http://127.0.0.1:3000/products');
		return this.http.get('http://127.0.0.1:3000/products').pipe(map(productsData=>productsData));	
	}
}
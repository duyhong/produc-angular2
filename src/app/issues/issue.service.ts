import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//import {map} from 'rxjs/operators';
//import 'rxjs/add/operator/map'
//import { Http, Response } from '@angular/http';

export class Issue {
	_id: string;
	category: string;
	description: string;
	loginid: string;
	status: string;
	dateOfReport: string;
}

@Injectable()
export class IssueService {
	constructor(private http: HttpClient) {
		
	}
	getIssues() {
		return this.http.get<Issue[]>('http://127.0.0.1:3000/issues');
	}

	saveIssue(issue) {
		//let date = new Date().toLocaleDateString();
		//let purchase = new Purchase();
		const headers = new HttpHeaders().set('Content-Type', 'application/json');

		this.http.post('http://127.0.0.1:3000/issues', JSON.stringify(issue),{headers: headers})
		.subscribe(data => {
			console.log("data = " + data);
		});
	}
}
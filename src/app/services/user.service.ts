// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://127.0.0.1:3000/users');
    }

    getById(id: number) {
        return this.http.get('http://127.0.0.1:3000/users/' + id);
    }

    create(user: User) {
        console.log("In user.service, user.password = " + user.password);
        console.log("In user.service, user.username = " + user.username);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this.http.post('http://127.0.0.1:3000/register', JSON.stringify(user),{headers: headers})
		// .subscribe(data => {
		// 	console.log("data = " + data);
		// });
        //return this.http.post('http://127.0.0.1:3000/users', user);
    }

    update(user: User) {
        return this.http.put('http://127.0.0.1:3000/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('http://127.0.0.1:3000/users/' + id);
    }
}

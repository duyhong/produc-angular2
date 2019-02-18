// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    //moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    //model: any = {};
    model = new User();
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService
        /*private alertService: AlertService*/) { }

    register() {
        //console.log(this.model);
        console.log("In register.component, model = " + this.model);
        console.log("In register.component, model.username = " + this.model.username);
        console.log("In register.component, model.password = " + this.model.password);
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    //this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                });
    }
}
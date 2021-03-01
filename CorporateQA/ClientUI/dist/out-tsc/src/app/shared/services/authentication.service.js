import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "https://localhost:5001/api/authentication";
        this.userId = 0;
        this.userName = '';
        this.profileSource = '';
    }
    setUserId() {
        this.userId = localStorage.getItem('userId') != null ? localStorage.getItem('userId') : 0;
        this.userName = localStorage.getItem('userId') != null ? localStorage.getItem('userName') : '';
        this.profileSource = localStorage.getItem('userId') != null ? localStorage.getItem('profileSource') : '';
    }
    signUp(data) {
        console.log(data);
        return this.http.post(this.rootUrl + '/signup', data);
    }
    signin(data) {
        return this.http.post(this.rootUrl + '/signin', data);
    }
    isAuthenticated() {
        const token = window.localStorage.getItem("token");
        return (token != null) ? true : false;
    }
};
AuthenticationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map
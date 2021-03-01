import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "https://localhost:5001/api/user";
    }
    getUsers() {
        return this.http.get(`${this.rootUrl}/users`);
    }
    getUser(userId) {
        return this.http.get(`${this.rootUrl}/user/${userId}`);
    }
    getUserQuestions(userId) {
        return this.http.get(`${this.rootUrl}/userquestions/${userId}`);
    }
    searchUser(userName) {
        return this.http.get(`${this.rootUrl}/searchuser/${userName}`);
    }
    getAnswers(questionId) {
        return this.http.get(`${this.rootUrl}/answers/${questionId}`);
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "https://localhost:5001/api/home";
    }
    getQuestions() {
        return this.http.get(`${this.rootUrl}/questions`);
    }
    getQuestionsByCategory(categoryId) {
        return this.http.get(`${this.rootUrl}/questionsbycategory/${categoryId}`);
    }
    postQuestion(question) {
        return this.http.post(`${this.rootUrl}/question`, question);
    }
    postAnswer(answer) {
        return this.http.post(`${this.rootUrl}/answer`, answer);
    }
    postLikes(likes, answerId) {
        return this.http.post(`${this.rootUrl}/likes/${answerId}`, likes);
    }
    postDislikes(dislikes, answerId) {
        return this.http.post(`${this.rootUrl}/dislikes/${answerId}`, dislikes);
    }
    postUpVotes(upVotes, questionId) {
        return this.http.post(`${this.rootUrl}/upvotes/${questionId}`, upVotes);
    }
    postViews(views, questionId) {
        return this.http.post(`${this.rootUrl}/views/${questionId}`, views);
    }
    getSearchQuestions(questionTitle) {
        return this.http.get(`${this.rootUrl}/searchquestions/${questionTitle}`);
    }
    postBestSolution(isBestSolution, answerId) {
        return this.http.get(`${this.rootUrl}/bestsolution/${answerId}/${isBestSolution}`);
    }
    getQuestionsByDate(date) {
        return this.http.get(`${this.rootUrl}/questionsbydate/${date}`);
    }
    getSolvedQuestions() {
        return this.http.get(`${this.rootUrl}/solvedquestions`);
    }
    getUnSolvedQuestions() {
        return this.http.get(`${this.rootUrl}/unsolvedquestions`);
    }
    getUserParticipation(userId) {
        return this.http.get(`${this.rootUrl}/userparticipation/${userId}`);
    }
};
HomeService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HomeService);
export { HomeService };
//# sourceMappingURL=home.service.js.map
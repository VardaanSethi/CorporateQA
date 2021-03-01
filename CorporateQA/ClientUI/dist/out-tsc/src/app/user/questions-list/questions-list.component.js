import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from "@angular/core";
let QuestionsListComponent = class QuestionsListComponent {
    constructor(homeService) {
        this.homeService = homeService;
        this.initialiseQuestions = new EventEmitter();
        this.userQuestion = null;
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    getAnswers(question) {
        this.userQuestion = question;
        this.questionUserId = this.userQuestion.userId;
        this.questionId = question.questionId;
        this.homeService.postViews(question.views, this.questionId).subscribe(res => {
        });
    }
    postUpVotes(question) {
        if (question.upVotes.indexOf(localStorage.getItem("userId")) == -1) {
            question.upVotes.push(localStorage.getItem("userId"));
            this.homeService.postUpVotes(question.upVotes, question.questionId).subscribe(res => {
                this.initialiseQuestions.emit();
            });
        }
    }
};
__decorate([
    Input()
], QuestionsListComponent.prototype, "questions", void 0);
__decorate([
    Output("initialiseQuestions")
], QuestionsListComponent.prototype, "initialiseQuestions", void 0);
QuestionsListComponent = __decorate([
    Component({
        selector: 'app-questions-list',
        templateUrl: './questions-list.component.html'
    })
], QuestionsListComponent);
export { QuestionsListComponent };
//# sourceMappingURL=questions-list.component.js.map
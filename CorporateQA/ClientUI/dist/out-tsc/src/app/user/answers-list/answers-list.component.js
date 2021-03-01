import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor } from 'ngx-editor';
import { Answer } from 'src/app/shared/models/answer.model';
let AnswersListComponent = class AnswersListComponent {
    constructor(userService, homeService) {
        this.userService = userService;
        this.homeService = homeService;
        this.userId = localStorage.getItem('userId');
        this.toolbar = [
            [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
            ['bold', 'italic', 'underline'],
            ['ordered_list', 'bullet_list'],
            ['blockquote'],
            ['link'],
        ];
    }
    ngOnInit() {
        this.initialiseAnswerForm();
        this.initialiseAnswers();
    }
    ngOnChanges() {
        this.initialiseAnswerForm();
        this.initialiseAnswers();
    }
    initialiseAnswerForm() {
        this.answerForm = new FormGroup({
            answer: new FormControl('', Validators.required),
        });
    }
    get answerFormControls() {
        return this.answerForm.controls;
    }
    initialiseAnswers() {
        this.editor = new Editor();
        this.userService.getAnswers(this.questionId).subscribe((res) => {
            this.answers = res;
        });
    }
    answerSubmit() {
        var description = this.answerForm.value.answer.replace(/(<([^>]+)>)/gi, '');
        var answer = new Answer(description, this.questionId, localStorage.getItem('userId'));
        this.homeService.postAnswer(answer).subscribe((res) => {
            this.initialiseAnswerForm();
            this.initialiseAnswers();
        });
    }
    postLikes(answer) {
        var userLikedIndex = answer.likes.indexOf(localStorage.getItem('userId'));
        var userDislikedIndex = answer.dislikes.indexOf(localStorage.getItem('userId'));
        if (userLikedIndex == -1) {
            answer.likes.push(localStorage.getItem('userId'));
            this.homeService
                .postLikes(answer.likes, answer.answerId)
                .subscribe((res) => {
                if (userDislikedIndex != -1) {
                    answer.dislikes.splice(userDislikedIndex, 1);
                    this.homeService
                        .postDislikes(answer.dislikes, answer.answerId)
                        .subscribe((res) => {
                        this.initialiseAnswers();
                    });
                }
            });
        }
    }
    postDislikes(answer) {
        var userLikedIndex = answer.likes.indexOf(localStorage.getItem('userId'));
        var userDislikedIndex = answer.dislikes.indexOf(localStorage.getItem('userId'));
        if (userDislikedIndex == -1) {
            answer.dislikes.push(localStorage.getItem('userId'));
            this.homeService
                .postDislikes(answer.dislikes, answer.answerId)
                .subscribe((res) => {
                if (userLikedIndex != -1) {
                    answer.likes.splice(userLikedIndex, 1);
                    this.homeService
                        .postLikes(answer.likes, answer.answerId)
                        .subscribe((res) => {
                        this.initialiseAnswers();
                    });
                }
            });
        }
    }
    setBestSolution(answerId, event) {
        event.target.value == true
            ? this.homeService.postBestSolution(false, answerId).subscribe((res) => {
                this.initialiseAnswers();
            })
            : this.homeService.postBestSolution(true, answerId).subscribe((res) => {
                this.initialiseAnswers();
            });
    }
};
__decorate([
    Input()
], AnswersListComponent.prototype, "questionId", void 0);
__decorate([
    Input()
], AnswersListComponent.prototype, "questionUserId", void 0);
AnswersListComponent = __decorate([
    Component({
        selector: 'app-answers-list',
        templateUrl: './answers-list.component.html',
    })
], AnswersListComponent);
export { AnswersListComponent };
//# sourceMappingURL=answers-list.component.js.map
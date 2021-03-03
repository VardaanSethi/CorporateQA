import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Editor } from 'ngx-editor';
import { Question } from "src/app/shared/models/question.model";
let HomeComponent = class HomeComponent {
    constructor(categoryService, homeService, userService, modelService) {
        this.categoryService = categoryService;
        this.homeService = homeService;
        this.userService = userService;
        this.modelService = modelService;
        this.toolbar = [
            [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
            ['bold', 'italic', 'underline'],
            ['ordered_list', 'bullet_list'],
            ['blockquote'],
            ['link'],
        ];
        this.userQuestion = null;
        this.userId = localStorage.getItem('userId');
    }
    ngOnInit() {
        this.categoryService.getCategories().subscribe((res) => {
            this.categories = res;
        });
        this.initialiseQuestions();
    }
    initialiseQuestionForm() {
        this.questionForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            category: new FormControl('', Validators.required),
        });
    }
    get questionFormControls() {
        return this.questionForm.controls;
    }
    initialiseQuestions() {
        this.homeService.getQuestions().subscribe((res) => {
            this.questions = res;
            console.log(this.questions);
        });
    }
    getQuestionsByCategory(event) {
        event.target.value == ''
            ? this.initialiseQuestions()
            : this.homeService
                .getQuestionsByCategory(event.target.value).subscribe((res) => {
                this.questions = res;
            });
    }
    openModal(content) {
        this.initialiseQuestionForm();
        this.editor = new Editor();
        this.modelService.open(content, { size: 'lg' });
    }
    questionSubmit() {
        var questionValue = this.questionForm.value;
        console.log(questionValue);
        var description = questionValue.description.replace(/(<([^>]+)>)/gi, '');
        this.question = new Question(questionValue.title, description, questionValue.category, localStorage.getItem('userId'));
        this.homeService.postQuestion(this.question).subscribe((res) => {
            this.initialiseQuestions();
            this.modelService.dismissAll();
        });
    }
    getQuestionsByShow(event) {
        switch (event.target.value) {
            case '1':
                this.userService.getUserQuestions(this.userId).subscribe((res) => {
                    this.questions = res;
                });
                break;
            case '2':
                this.homeService.getUserParticipation(this.userId).subscribe((res) => {
                    this.questions = res;
                });
                break;
            case '4':
                this.homeService.getSolvedQuestions().subscribe((res) => {
                    this.questions = res;
                });
                break;
            case '5':
                this.homeService.getUnSolvedQuestions().subscribe((res) => {
                    this.questions = res;
                });
                break;
            default:
                this.initialiseQuestions();
                break;
        }
    }
    getQuestionsByDate(event) {
        event.target.value == ''
            ? this.initialiseQuestions()
            : this.homeService
                .getQuestionsByDate(event.target.value)
                .subscribe((res) => {
                this.questions = res;
            });
    }
    searchQuestions(event) {
        event.target.value == ''
            ? this.initialiseQuestions()
            : this.homeService
                .getSearchQuestions(event.target.value)
                .subscribe((res) => {
                this.questions = res;
            });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
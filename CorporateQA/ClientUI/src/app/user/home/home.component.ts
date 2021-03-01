import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Editor, Toolbar } from 'ngx-editor';
import { Question } from "src/app/shared/models/question.model";
import { CategoryService } from "src/app/shared/services/category.service";
import { HomeService } from "src/app/shared/services/home.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
  })
  export class HomeComponent implements OnInit {
    editor: any;
    toolbar: Toolbar = [
      [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
      ['bold', 'italic', 'underline'],
      ['ordered_list', 'bullet_list'],
      ['blockquote'],
      ['link'],
    ];
  
    constructor(
      private categoryService: CategoryService,
      private homeService: HomeService,
      private userService: UserService,
      private modelService: NgbModal
    ) {}
  
    categories: any;
    questions: any;
    userQuestion: any = null;
    questionId: any;
    answerForm: any;
    questionUserId: any;
    questionForm: any;
    question: any;
    userId = localStorage.getItem('userId');
  
    ngOnInit(): void {
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
      });
    }
  
    getQuestionsByCategory(event: any) {
      event.target.value == ''
        ? this.initialiseQuestions()
        : this.homeService
            .getQuestionsByCategory(event.target.value).subscribe(
              (res) => {
                this.questions = res;
            });
    }
  
    openModal(content: any) {
      this.initialiseQuestionForm();
      this.editor = new Editor();
      this.modelService.open(content, { size: 'lg' });
    }
  
    questionSubmit() {
      var questionValue = this.questionForm.value;
      var description = questionValue.description.replace(/(<([^>]+)>)/gi, '');
      this.question = new Question(
        questionValue.title,
        description,
        questionValue.category,
        localStorage.getItem('userId')
      );
      this.homeService.postQuestion(this.question).subscribe((res) => {
        this.initialiseQuestions();
        this.modelService.dismissAll();
      });
    }
  
    getQuestionsByShow(event: any) {
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
  
    getQuestionsByDate(event: any) {
      event.target.value == ''
        ? this.initialiseQuestions()
        : this.homeService
            .getQuestionsByDate(event.target.value)
            .subscribe((res) => {
              this.questions = res;
            });
    }
  
    searchQuestions(event: any) {
      event.target.value == ''
        ? this.initialiseQuestions()
        : this.homeService
            .getSearchQuestions(event.target.value)
            .subscribe((res) => {
              this.questions = res;
            });
    }
  }
  
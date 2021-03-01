import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { Answer } from 'src/app/shared/models/answer.model';
import { HomeService } from 'src/app/shared/services/home.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
})
export class AnswersListComponent implements OnChanges, OnInit {
  @Input() questionId: any;
  @Input() questionUserId: any;

  constructor(
    private userService: UserService,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.initialiseAnswerForm();
    this.initialiseAnswers();
  }

  ngOnChanges() {
    this.initialiseAnswerForm();
    this.initialiseAnswers();
  }

  answerForm: any;
  answers: any;
  userId = localStorage.getItem('userId');
  editor: any;
  toolbar: Toolbar = [
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['bold', 'italic', 'underline'],
    ['ordered_list', 'bullet_list'],
    ['blockquote'],
    ['link'],
  ];

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
    var answer = new Answer(
      description,
      this.questionId,
      localStorage.getItem('userId')
    );
    this.homeService.postAnswer(answer).subscribe((res) => {
      this.initialiseAnswerForm();
      this.initialiseAnswers();
    });
  }

  postLikes(answer: any) {
    var userLikedIndex = answer.likes.indexOf(localStorage.getItem('userId'));
    var userDislikedIndex = answer.dislikes.indexOf(
      localStorage.getItem('userId')
    );

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

  postDislikes(answer: any) {
    var userLikedIndex = answer.likes.indexOf(localStorage.getItem('userId'));
    var userDislikedIndex = answer.dislikes.indexOf(
      localStorage.getItem('userId')
    );
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

  setBestSolution(answerId: any, event: any) {
    event.target.value == true
      ? this.homeService.postBestSolution(false, answerId).subscribe((res) => {
          this.initialiseAnswers();
        })
      : this.homeService.postBestSolution(true, answerId).subscribe((res) => {
          this.initialiseAnswers();
        });
  }
}

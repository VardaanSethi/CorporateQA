import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { HomeService } from "src/app/shared/services/home.service";


@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html'
})
export class QuestionsListComponent implements OnInit,OnChanges {

  @Input() questions:any;
  @Output("initialiseQuestions") initialiseQuestions:any=new EventEmitter();
  
  constructor(
    private homeService:HomeService
  ) { }

  userQuestion:any=null;
  questionUserId:any;
  questionId:any;
  
  ngOnInit(): void {
      
  }

  ngOnChanges(){
  }

  getAnswers(question: any) {
    this.userQuestion = question;
    this.questionUserId=this.userQuestion.userId;
    this.questionId = question.questionId;
    this.homeService.postViews(question.views,this.questionId).subscribe(res=>{
    
    })
  }
  postUpVotes(question:any){
    if(question.upVotes.indexOf(localStorage.getItem("userId"))==-1){
      question.upVotes.push(localStorage.getItem("userId"));
      this.homeService.postUpVotes(question.upVotes,question.questionId).subscribe(res=>{
       this.initialiseQuestions.emit();
     })
  }
  }
}
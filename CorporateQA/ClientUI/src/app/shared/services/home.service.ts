import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  rootUrl="https://localhost:5001/api/home";

  constructor(
    private http:HttpClient
  ) { }

  getQuestions(){

    return this.http.get(`${this.rootUrl}/questions`);
  }

  getQuestionsByCategory(categoryId:any){
    return this.http.get(`${this.rootUrl}/questionsbycategory/${categoryId}`);
  }

  postQuestion(question:any){
    return this.http.post(`${this.rootUrl}/question`,question);
  }

  postAnswer(answer:any){
    return this.http.post(`${this.rootUrl}/answer`,answer);
  }

  postLikes(likes:any,answerId:any){
    return this.http.post(`${this.rootUrl}/likes/${answerId}`,likes);
  }

  postDislikes(dislikes:any,answerId:any){
    return this.http.post(`${this.rootUrl}/dislikes/${answerId}`,dislikes);
  }

  postUpVotes(upVotes:any,questionId:any){
    return this.http.post(`${this.rootUrl}/upvotes/${questionId}`,upVotes);
  }

  postViews(views:any,questionId:any){
    return this.http.post(`${this.rootUrl}/views/${questionId}`,views);
  }

  getSearchQuestions(questionTitle:any){
    return this.http.get(`${this.rootUrl}/searchquestions/${questionTitle}`);
  }

  postBestSolution(isBestSolution:any,answerId:any){
    return this.http.get(`${this.rootUrl}/bestsolution/${answerId}/${isBestSolution}`);
  }

  getQuestionsByDate(date:any){
    return this.http.get(`${this.rootUrl}/questionsbydate/${date}`);
  }

  getSolvedQuestions(){
    return this.http.get(`${this.rootUrl}/solvedquestions`);
  }

  
  getUnSolvedQuestions(){
    return this.http.get(`${this.rootUrl}/unsolvedquestions`);
  }

  getUserParticipation(userId:any){
    return this.http.get(`${this.rootUrl}/userparticipation/${userId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootUrl="https://localhost:5001/api/user";

  constructor(
    private http:HttpClient
  ) { }

  getUsers(){
    return this.http.get(`${this.rootUrl}/users`);
  }

  getUser(userId:any){
    return this.http.get(`${this.rootUrl}/user/${userId}`);
  }

  getUserQuestions(userId:any){
    return this.http.get(`${this.rootUrl}/userquestions/${userId}`);
  }
  searchUser(userName:any){
    return this.http.get(`${this.rootUrl}/searchuser/${userName}`);
  }

  getAnswers(questionId:any){
    return this.http.get(`${this.rootUrl}/answers/${questionId}`);
  }
}

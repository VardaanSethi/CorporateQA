import { HttpClient } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { LoginResponse, Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  rootUrl = "https://localhost:5001/api/authentication"
  constructor(
    private http: HttpClient
  ) { }
  userId: any = 0;
  userName: any = '';
  profileSource: any = '';
  setUserId() {
    this.userId = localStorage.getItem('userId') != null ? localStorage.getItem('userId') : 0;
    this.userName = localStorage.getItem('userId') != null ? localStorage.getItem('userName') : '';
    this.profileSource = localStorage.getItem('userId') != null ? localStorage.getItem('profileSource') : '';
  }
  signUp(data: any) {
    console.log(data);
    return this.http.post<Response>(this.rootUrl + '/signup', data);
  }

  signin(data: any) {
    return this.http.post<LoginResponse>(this.rootUrl + '/signin', data);
  }

  public isAuthenticated(): boolean {
    const token = window.localStorage.getItem("token");
    return (token != null) ? true : false;

  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

  constructor(
    private router:Router,
    private userService:UserService
  ) { }
users:any;
  ngOnInit(): void {
    this.initialiseUsers();
  }

  initialiseUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.users=res;
    })
  }

navigate(userId:any){
this.router.navigate([`user/userdetails/${userId}`]);
}

searchUser(event:any){
  (event.target.value=='')?this.initialiseUsers():this.userService.searchUser(event.target.value).subscribe(res=>{
    this.users=res;
  })
}
}

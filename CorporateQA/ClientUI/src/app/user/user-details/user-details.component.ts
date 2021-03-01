import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  
  userId:any;
  user: any;
  questions:any;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId=params.get("userId");
    });
    this.userService.getUser(this.userId).subscribe((res) => {
      this.user = res;
      this.initialiseUserQuestions();
    });
  }

  initialiseUserQuestions(){
    this.userService.getUserQuestions(this.userId).subscribe(res=>{
      this.questions=res;
    })
  }

}

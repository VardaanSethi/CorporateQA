import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(
    private authenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {

    this.authenticationService.setUserId();
  }

}

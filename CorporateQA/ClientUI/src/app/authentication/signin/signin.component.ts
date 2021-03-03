import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [
  ]
})
export class SigninComponent implements OnInit {

  signinForm: any;
  role: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.initializeSigninForm();
  }

  initializeSigninForm() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get formControls() {
    return this.signinForm.controls;
  }

  onSubmit() {
    this.authenticationService
      .signin(this.signinForm.value)
      .subscribe((res) => {
        if (res.status != 'Error') {
          localStorage.setItem('userId', res.id);
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);
          localStorage.setItem('userName', res.user);
          localStorage.setItem('profileSource', res.profileImageUrl);
          this.role = localStorage.getItem('role');
          alert(res.message);
          this.router.navigate([`/user/home`])

        } else {
          alert(res.message);
          this.initializeSigninForm();
        }
      });
  }

}

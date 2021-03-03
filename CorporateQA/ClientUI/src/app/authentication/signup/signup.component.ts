import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  signupForm: any;
  status = '';
  message = '';
  profileSrc = '';
  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.inititlaiseSignupForm();
  }
  inititlaiseSignupForm() {
    this.profileSrc = '';
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
      jobrole: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      joblocation: new FormControl('', Validators.required),
      profile: new FormControl('', Validators.required),
      profileImageUrl: new FormControl('', Validators.required)
    });
  }
  get formControls() {
    return this.signupForm.controls;
  }

  onImageChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);

      reader.onload = () => {
        this.profileSrc = reader.result as string;

        this.signupForm.patchValue({
          profileImageUrl: this.profileSrc,
        });
      };
    }
  }

  onSubmit() {
    this.authenticationService
      .signUp(this.signupForm.value)
      .subscribe((res) => {
        res.status === 'Error'
          ? alert(res.message)
          : alert(res.message);
        this.inititlaiseSignupForm();
      });
  }

}

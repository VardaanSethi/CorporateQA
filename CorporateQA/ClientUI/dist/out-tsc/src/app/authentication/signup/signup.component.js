import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let SignupComponent = class SignupComponent {
    constructor(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.status = '';
        this.message = '';
        this.profileSrc = '';
    }
    ngOnInit() {
        this.inititlaiseSignupForm();
    }
    inititlaiseSignupForm() {
        this.profileSrc = '';
        this.signupForm = new FormGroup({
            username: new FormControl('', Validators.required),
            email: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'),
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
    onImageChange(event) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [image] = event.target.files;
            reader.readAsDataURL(image);
            reader.onload = () => {
                this.profileSrc = reader.result;
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
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styles: []
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent, SignupComponent, AuthenticationComponent } from './index';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    NgModule({
        declarations: [SigninComponent, SignupComponent, AuthenticationComponent],
        imports: [
            CommonModule,
            AuthenticationRoutingModule,
            ReactiveFormsModule
        ],
        exports: [
            SigninComponent,
            SignupComponent
        ],
        bootstrap: [AuthenticationComponent]
    })
], AuthenticationModule);
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent, SignupComponent, AuthenticationComponent } from './index'
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
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
export class AuthenticationModule { }
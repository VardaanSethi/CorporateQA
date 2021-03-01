import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent,SigninComponent,AuthenticationComponent } from './index';

let routes: Routes = [
  {
      path: "",
      component:AuthenticationComponent,
      children: [
        {
          path:'signin',component:SigninComponent
        },
        {
          path:'',component:SigninComponent
        
        }
        ,
        {
          path:'signup',component:SignupComponent
        }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }

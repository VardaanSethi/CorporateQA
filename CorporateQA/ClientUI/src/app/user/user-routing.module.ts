import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../shared/services/auth-guard.service'
import { UserComponent, HomeComponent, CategoryComponent, UsersListComponent, UserDetailsComponent } from './index'

const role = {
  user: 'User',
  admin: 'Admin'
}

let routes: Routes = [
  {
    path: "",
    component: UserComponent,
    canActivate: [AuthGuard],
    data: {
      role: role.user
    },
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'category', component: CategoryComponent
      },
      {
        path: 'users', component: UsersListComponent
      },
      {
        path: 'userdetails/:userId', component: UserDetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})

export class UserRoutingModule { }

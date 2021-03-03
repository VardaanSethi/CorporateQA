import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('../app/authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../app/user/user.module').then((m) => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

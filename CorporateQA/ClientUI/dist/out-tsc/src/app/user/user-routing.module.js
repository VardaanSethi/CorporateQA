import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../shared/services/auth-guard.service';
import { UserComponent, HomeComponent, CategoryComponent, UsersListComponent, UserDetailsComponent } from './index';
const role = {
    user: 'User',
    admin: 'Admin'
};
let routes = [
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
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        providers: [],
        exports: [RouterModule]
    })
], UserRoutingModule);
export { UserRoutingModule };
//# sourceMappingURL=user-routing.module.js.map
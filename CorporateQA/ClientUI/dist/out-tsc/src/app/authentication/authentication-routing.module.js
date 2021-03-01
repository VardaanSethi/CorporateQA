import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent, SigninComponent, AuthenticationComponent } from './index';
let routes = [
    {
        path: "",
        component: AuthenticationComponent,
        children: [
            {
                path: 'signin', component: SigninComponent
            },
            {
                path: '', component: SigninComponent
            },
            {
                path: 'signup', component: SignupComponent
            }
        ]
    }
];
let AuthenticationRoutingModule = class AuthenticationRoutingModule {
};
AuthenticationRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AuthenticationRoutingModule);
export { AuthenticationRoutingModule };
//# sourceMappingURL=authentication-routing.module.js.map
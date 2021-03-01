import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuardService = class AuthGuardService {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate(route) {
        var role = route.data.role;
        if (this.authenticationService.isAuthenticated() && role == localStorage.getItem("role")) {
            return true;
        }
        else {
            this.router.navigate(['authentication']);
            return false;
        }
    }
};
AuthGuardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuardService);
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map
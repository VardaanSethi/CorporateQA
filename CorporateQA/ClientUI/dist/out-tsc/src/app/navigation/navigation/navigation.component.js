import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavigationComponent = class NavigationComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.currentMonth = new Date().toLocaleString('default', { month: 'short' });
        this.currentDay = new Date().getDay();
        this.currentYear = new Date().getFullYear();
    }
    logOut() {
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.authenticationService.setUserId();
        this.router.navigate(['authentication']);
    }
};
NavigationComponent = __decorate([
    Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html'
    })
], NavigationComponent);
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map
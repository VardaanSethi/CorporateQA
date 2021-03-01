import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserComponent = class UserComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.authenticationService.setUserId();
    }
};
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html'
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map
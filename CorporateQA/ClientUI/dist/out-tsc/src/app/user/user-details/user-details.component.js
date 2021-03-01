import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserDetailsComponent = class UserDetailsComponent {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.userId = params.get("userId");
        });
        this.userService.getUser(this.userId).subscribe((res) => {
            this.user = res;
            this.initialiseUserQuestions();
        });
    }
    initialiseUserQuestions() {
        this.userService.getUserQuestions(this.userId).subscribe(res => {
            this.questions = res;
        });
    }
};
UserDetailsComponent = __decorate([
    Component({
        selector: 'app-user-details',
        templateUrl: './user-details.component.html',
    })
], UserDetailsComponent);
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map
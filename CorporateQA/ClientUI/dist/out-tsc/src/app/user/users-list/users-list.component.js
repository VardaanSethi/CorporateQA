import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsersListComponent = class UsersListComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.initialiseUsers();
    }
    initialiseUsers() {
        this.userService.getUsers().subscribe(res => {
            this.users = res;
        });
    }
    navigate(userId) {
        this.router.navigate([`user/userdetails/${userId}`]);
    }
    searchUser(event) {
        (event.target.value == '') ? this.initialiseUsers() : this.userService.searchUser(event.target.value).subscribe(res => {
            this.users = res;
        });
    }
};
UsersListComponent = __decorate([
    Component({
        selector: 'app-users-list',
        templateUrl: './users-list.component.html'
    })
], UsersListComponent);
export { UsersListComponent };
//# sourceMappingURL=users-list.component.js.map
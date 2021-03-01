import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "https://localhost:5001/api/category";
    }
    getCategories() {
        return this.http.get(`${this.rootUrl}/categories`);
    }
    postCategory(category) {
        return this.http.post(`${this.rootUrl}/category`, category);
    }
    getCategoriesList() {
        return this.http.get(`${this.rootUrl}/categoryquestionlookup`);
    }
    searchCategories(category) {
        return this.http.get(`${this.rootUrl}/searchcategories/${category}`);
    }
};
CategoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map
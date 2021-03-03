import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let CategoryComponent = class CategoryComponent {
    constructor(categoryService, modelService) {
        this.categoryService = categoryService;
        this.modelService = modelService;
    }
    ngOnInit() {
        this.initialiseCategoryForm();
    }
    initialiseCategoryForm() {
        this.categoryForm = new FormGroup({
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        });
        this.categoryService.getCategoriesList().subscribe((res) => {
            this.categories = res;
        });
    }
    get formControls() {
        return this.categoryForm.controls;
    }
    openModal(content) {
        this.modelService.open(content, { size: 'lg' });
    }
    onSubmit() {
        this.categoryService
            .postCategory(this.categoryForm.value)
            .subscribe((res) => {
            this.initialiseCategoryForm();
            this.modelService.dismissAll();
        });
    }
    searchCategory(event) {
        (event.target.value == '') ? this.initialiseCategoryForm() : this.categoryService.searchCategories(event.target.value).subscribe(res => {
            this.categories = res;
        });
    }
};
CategoryComponent = __decorate([
    Component({
        selector: 'app-category',
        templateUrl: './category.component.html',
    })
], CategoryComponent);
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map
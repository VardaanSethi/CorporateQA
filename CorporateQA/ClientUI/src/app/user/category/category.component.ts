import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private modelService: NgbModal
  ) {}

  categories: any;
  categoryForm: any;
  ngOnInit(): void {
    this.initialiseCategoryForm();
  }

  initialiseCategoryForm() {
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.categoryService.getCategoriesList().subscribe((res) => {
      console.log(res);
      this.categories = res;
    });
  }
  get formControls() {
    return this.categoryForm.controls;
  }
  openModal(content: any) {
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

  searchCategory(event:any){
    (event.target.value=='')?this.initialiseCategoryForm():this.categoryService.searchCategories(event.target.value).subscribe(res=>{
      this.categories=res;
    })
  }
}

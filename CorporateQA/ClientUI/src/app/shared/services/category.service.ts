import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  rootUrl = "https://localhost:5001/api/category"
  constructor(
    private http: HttpClient
  ) { }


  getCategories() {
    return this.http.get(`${this.rootUrl}/categories`)
  }
  postCategory(category: any) {
    return this.http.post(`${this.rootUrl}/category`, category);
  }

  getCategoriesList() {
    return this.http.get(`${this.rootUrl}/categoryquestionlookup`);
  }

  searchCategories(category: any) {
    return this.http.get(`${this.rootUrl}/searchcategories/${category}`);
  }
}

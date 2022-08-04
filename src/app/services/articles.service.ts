import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArtical(page: number, per_page: number): Observable<any> {
    let resultPage = this.http.get('https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}');
    resultPage.subscribe((response) => {
      console.log(response);
    });
    return resultPage;
  }
  getById(id: number): Observable<any> {
    let resultObservable = this.http.get(`https://social.runwayclub.dev/api/articles/${id}`);
    return resultObservable;
  }
}


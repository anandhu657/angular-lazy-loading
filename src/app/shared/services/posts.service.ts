import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IBlogs } from '../model/blogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<IBlogs[]> {
    return this.http.get<IBlogs[]>(`${environment.apiUrl}/blog`)
  }
}

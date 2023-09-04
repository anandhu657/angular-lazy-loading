import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IUser } from '../model/user';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userSignup(userData: IUser): Observable<IUser> {
    console.log(userData);

    return this.http.post<IUser>(`${environment.apiUrl}/user/register`, userData);
  }

  userLogin(userData: IUser): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.apiUrl}/user/login`, userData)
  }   
}

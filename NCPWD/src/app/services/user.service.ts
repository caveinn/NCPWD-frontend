import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import  { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(
      'http://127.0.1:8000/api/users/', user
, this.httpOptions);
  }

  logIn(email: string, password: string): Observable<User> {
    return this.http.post<User>(
      `${environment.apiUrl}/api/users/login/`, {email, password}
, this.httpOptions).pipe(map(user => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
    }));
  }


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }
}

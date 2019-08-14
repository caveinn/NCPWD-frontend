import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Topic} from '../models/topic';
import { Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {
  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };
  getTopics(): Observable<Topic[]> {
   return this.http.get<Topic[]>(`${environment.apiUrl}/api/topics/`, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}

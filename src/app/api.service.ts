import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './modeltypes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  rootUrl = 'http://127.0.0.1:8000/';
  taskUrl = `${this.rootUrl}api/tasks/`;

  headers = new HttpHeaders({
    'Content_Type' : 'application/json',
    Authorization: 'Token f6f54a48ef8911427737df7351880ec385ef0feb',
  })
  constructor(
    private httpClient: HttpClient,
  ) { }

  getTasks() {
    return this.httpClient.get<Task[]>(this.taskUrl, {headers: this.headers})
  }

}

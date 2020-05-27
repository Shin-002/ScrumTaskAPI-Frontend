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
    'Content-Type' : 'application/json',
    Authorization: 'Token f6f54a48ef8911427737df7351880ec385ef0feb',
  })
  constructor(
    private httpClient: HttpClient,
  ) { }

  getTasks() {
    return this.httpClient.get<Task[]>(this.taskUrl, {headers: this.headers})
  }

  createTask(sprint_pk_id:number, task:string, description:string, criteria:string, responsible_pk_id:number, estimate:number, tag_pk_id:number, status:string){
    const body = JSON.stringify({sprint_pk_id, task, description, criteria, responsible_pk_id, estimate, tag_pk_id, status})
    return this.httpClient.post(this.taskUrl, body, {headers: this.headers})
  }

  updateTask(id:number, sprint_pk_id:number, task:string, description:string, criteria:string, responsible_pk_id:number, estimate:number, tag_pk_id:number, status:string){
    const body = JSON.stringify({sprint_pk_id, task, description, criteria, responsible_pk_id, estimate, tag_pk_id, status})
    return this.httpClient.put(`${this.taskUrl}${id}/`, body, {headers: this.headers})
  }

  deleteTask(id:number) {
    return this.httpClient.delete(`${this.taskUrl}${id}/`, {headers: this.headers})
  }

  getUsers() {
    return this.httpClient.get(`${this.rootUrl}api/users/`, {headers: this.headers})
  }

  getSprints() {
    return this.httpClient.get(`${this.rootUrl}api/sprints/`, {headers: this.headers})
  }

  getTags() {
    return this.httpClient.get(`${this.rootUrl}api/tags/`, {headers: this.headers})
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url= 'http://localhost:8080/project/'
  constructor(private httpClient:HttpClient) { }

  public create(project: Project):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create' , project);
  }

  public readProject(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.url + 'read');
  }

  public update(project: Project):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update' , project);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public find(id: number):Observable<any>{
    return this.httpClient.get<any>(this.url + `find/${id}`);
  }
}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url= 'http://localhost:8080/about/'
  constructor(private httpClient:HttpClient) { }

  public create(about: About):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create' , about);
  }

  public readAbout(): Observable<About[]>{
    return this.httpClient.get<About[]>(this.url + 'read');
  }

  public update(about: About):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update' , about);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public find(id: number):Observable<any>{
    return this.httpClient.get<any>(this.url + `find/${id}`);
  }
}


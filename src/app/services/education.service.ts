import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url= 'http://localhost:8080/education/'
  constructor(private httpClient:HttpClient) { }

  public create(education: Education):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create' , education);
  }

  public readEducation(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.url + 'read');
  }

  public update(education: Education):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update' , education);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public find(id: number):Observable<any>{
    return this.httpClient.get<any>(this.url + `find/${id}`);
  }
}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url= 'http://localhost:8080/experience/'
  constructor(private httpClient:HttpClient) { }

  public create(experience: Experience):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create' , experience);
  }

  public readExperience(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.url + 'read');
  }

  public update(experience: Experience):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update' , experience);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public find(id: number):Observable<any>{
    return this.httpClient.get<any>(this.url + `find/${id}`);
  }
}

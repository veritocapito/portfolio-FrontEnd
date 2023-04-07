import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url= 'http://localhost:8080/skill/'
  constructor(private httpClient:HttpClient) { }

  public create(skill: Skill):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create' , skill);
  }

  public readSkill(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.url + 'read');
  }

  public update(skill: Skill):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update' , skill);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }

  public find(id: number):Observable<any>{
    return this.httpClient.get<any>(this.url + `find/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url='https://portfolio-backend-gzc8.onrender.com/persona/'
  constructor(private httpClient:HttpClient) { }

  public readPersons(): Observable<Person[]>{ //importacion desde la entidad persona
    return this.httpClient.get<Person[]>(this.url + 'read');
  }

  public readPerson(id: number): Observable<Person>{
    return this.httpClient.get<Person>(this.url + `read/${id}`)
  }

  public create(person: Person): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', person);
  }

  public delete(id: number): Observable<Person>{
    return this.httpClient.delete<Person>(this.url + `delete/${id}`)
  }

  public update(id:number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.url + `update/${id}`, person); 
  }
}
/* import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});  //aca despues se trabaja con localsesionstorage

  constructor( private http:HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get<User>('././assets/data/data.json').pipe(
      tap( userData =>{
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if (error.status===0){
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Backend retornó el codigo de estado ', error.status, error.error);
    }
    return throwError(()=> new Error ('Algo falló. Por favor intente nuevamente.'));
  }

  get userLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

  get userData():Observable<User>{
    return this.currentUserData.asObservable();
  }
} */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="https://portfolio-backend-gzc8.onrender.com/persona/autentication/login";//modificar url
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  login(credenciales:any): Observable<any>{

    return this.http.post<any>(this.url, credenciales).pipe(map(data => {
    sessionStorage.setItem('currentUser',JSON.stringify(data));
    this.currentUserSubject.next(data);
    console.log("Servicio esta corriendo" + JSON.stringify(data));
    return data
    }));
  }

  get usuarioAutenticado(){  
    return this.currentUserSubject.value;
  }
}
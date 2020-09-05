import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl = 'http://localhost:3000/api';
  isLoggedIn = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'
    })
  }

  getLoginStatus() {
    if(!this.isLoggedIn) this.checkLoginStatus()
    return this.isLoggedIn.asObservable()
  }

  login(data): Observable<any> {
    console.log(data)
    return this.http.post<any>(this.baseurl + '/login/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      )
  }

  checkLoginStatus(){
    const token = localStorage.getItem('token')
    this.http.post<any>(this.baseurl + '/token/verify', token, this.httpOptions)
      .subscribe(res => res ? this.isLoggedIn.next(true) : this.isLoggedIn.next(false) )
  }

  errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

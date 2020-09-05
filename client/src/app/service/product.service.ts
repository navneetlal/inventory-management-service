import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'
    })
  }

  createProduct(product):Observable<any> {
    return this.http.post(this.baseurl + '/product', JSON.stringify(product), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      )
  }

  getAllProduct():Observable<any> {
    return this.http.get(this.baseurl + '/product', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      )
  }

  getProductById(id: string):Observable<any> {
    return this.http.get(this.baseurl + '/product/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandle)
      )
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

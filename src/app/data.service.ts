import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private usersUrl = 'https://randomuser.me/api/?inc=name,picture,login,location,dob';

  constructor(
    private http: HttpClient,
    private log: LogService
    ) { }

  getUsers(results: number): Observable<any> {
    let url = results ? `${this.usersUrl}&results=${results}` : `${this.usersUrl}&results=15`;
    return this.http.get(url)
      .pipe(
        tap(_ => this.log.write({time: new Date().toString(), type: 'ds', content: `fetched ${results} users`})),
        catchError(this.handleError<any>('getData'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log.write({time: new Date().toString(), type: 'rm', content: `error in fetch`});
      return of(result as T);
    };
  }

}

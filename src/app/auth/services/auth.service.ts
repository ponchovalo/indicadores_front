import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  public _currentUser = signal<User | null>(null);
  public _authStatus = signal<AuthStatus>( AuthStatus.checking);

  //! Al mundo exterior
  public currentUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus() );

  constructor() { }

  private setAuthentication(user: User, token:string): boolean {

    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem('token', token);

    return true;
  }

  login( username: string, password: string ): Observable<boolean>{
    const url =  `${this.baseUrl}/auth/login`;
    const body = { username, password }

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map( ({ user, token }) => this.setAuthentication(user, token)),
        catchError( err => throwError(()=> err.error.message)),
      )
  }
  
}

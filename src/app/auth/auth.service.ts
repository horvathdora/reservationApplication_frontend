import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loginUrl = 'http://localhost:8081/api/auth/signin';
  private registerUrl = 'http://localhost:8081/api/auth/register';
 
  constructor(private http: HttpClient) {
  }
 
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return <Observable<JwtResponse>>this.http.post(this.loginUrl, credentials, httpOptions);
  }
 
  signUp(info: SignUpInfo): Observable<string> {
    return <Observable<string>>this.http.post(this.registerUrl, info, httpOptions);
  }

  loggedIn(): boolean{
    console.log(sessionStorage.getItem('token'));
    return !!sessionStorage.getItem('token');
  }
}
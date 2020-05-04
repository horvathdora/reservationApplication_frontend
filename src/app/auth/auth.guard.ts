import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private token: TokenStorageService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this.token.loggedIn()) {
      console.log('true');
      return true;
    } else {
      console.log('false')    ;        
      this._router.navigate(['auth/login']);
      return false;
    }
  }
}
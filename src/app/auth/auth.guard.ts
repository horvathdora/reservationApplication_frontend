import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private token: TokenStorageService,
    private _router: Router) { }

    //azt ellenőrzi, hogy be van-e jelentkezve a felhasználó
    // és hozzáférhet-e az oldalhoz

    // Ha be van jelentkezve a felhasználó akkor true-val, 
    // ha nincs bejelentkezve akkor false-al tér vissza 
    // és átirányítja a felhasználót a bejelentkező oldalra
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
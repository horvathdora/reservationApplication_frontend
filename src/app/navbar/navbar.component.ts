import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public roles: string[];
  public authority: string;

  constructor(
    private tokenStorage: TokenStorageService,
  ) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  //felhasználó authorizációját ellenőrzi
  private checkAuth() {
    this.authority = undefined;
    if (this.tokenStorage.getToken()) { //igaz - ha be van jelentkezve a felhasználó
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every((role) => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    //kilépteti a felhasználót
    this.tokenStorage.signOut();
    this.checkAuth();
  }
}

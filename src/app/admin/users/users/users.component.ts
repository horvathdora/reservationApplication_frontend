import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}

  users: User[];

  getUsers(): void {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
        this.users.forEach((user) => {
          user.isAdmin = user.roles.every((role) => {
            if (role.name === 'ROLE_ADMIN') {
              return true;
            }
            return false;
          });
          if (user.isAdmin) {
            user.role = 'admin';
          } else {
            user.role = 'user';
          }
        });
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(user: User): void {
    this.userService.delete(user.id).subscribe((data) => {
      this.users = this.users.filter((a) => a !== user);
    });
  }

  ngOnInit() {
    this.getUsers();
  }
}

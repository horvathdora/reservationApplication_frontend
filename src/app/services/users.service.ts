import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

const userUrl = 'http://localhost:8081/api/admin/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]>{
    return <Observable<User[]>>this.http.get(userUrl);
  }

  get(id: number): Observable<User> {
    return <Observable<User>>this.http.get(`${userUrl}/${id}`);
  }

  create(user: User) {
    return this.http.post(userUrl, user);
  }

  update(user: User, id: number): Observable<User> {
    return <Observable<User>>this.http.put(`${userUrl}/${id}`, user);
  }

  delete(id: number) {
    window.location.reload();
    return this.http.delete(`${userUrl}/${id}`);
  }

}
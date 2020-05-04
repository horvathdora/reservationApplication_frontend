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
    return this.http.get<User[]>(userUrl);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${userUrl}/${id}`);
  }

  create(user: User) {
    return this.http.post(userUrl, user);
  }

  update(user: User, id: number): Observable<User> {
    return this.http.put<User>(`${userUrl}/${id}`, user);
  }

  delete(id: number) {
    window.location.reload();
    return this.http.delete(`${userUrl}/${id}`);
  }

}
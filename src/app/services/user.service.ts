import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';
import { Apartment } from '../models/apartment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}

  getReservationsByDate(
    start_date: string,
    end_date: string
  ): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(
      `${this.userUrl}/reservation/apartments/${start_date}/${end_date}`
    );
  }

  getReservations(username: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(
      `${this.userUrl}/${username}/reservations`
    );
  }

  addReservation(username: string, reservation: Reservation) {
    return this.http.post(`${this.userUrl}/${username}`, reservation);
  }

  deleteReservation(reservationID: number) {
    window.location.reload();
    return this.http.delete(`${this.userUrl}/reservations/${reservationID}`);
  }
}

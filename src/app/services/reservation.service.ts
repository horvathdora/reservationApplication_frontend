import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';

const reservationUrl = 'http://localhost:8081/api/admin/reservations';
const userUrl = 'http://localhost:8081/user';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reservation[]>{
    return <Observable<Reservation[]>>this.http.get(reservationUrl);
  }

  get(id: number): Observable<Reservation> {
    return <Observable<Reservation>>this.http.get(`${reservationUrl}/${id}`);
  }

  create(reservation: Reservation) {
    return this.http.post(reservationUrl, reservation);
  }

  update(reservation: Reservation, id: number): Observable<Reservation> {
    return <Observable<Reservation>>this.http.put(`${reservationUrl}/${id}`, reservation);
  }

  delete(id: number) {
    window.location.reload();
    return this.http.delete(`${reservationUrl}/${id}`);
  }

  //felhasználóhoz tartozó foglalások
  getReservations(username: string): Observable<Reservation[]> {
    return <Observable<Reservation[]>>this.http.get(
      `${userUrl}/${username}/reservations`
    );
  }

  // felhasználó által létrehozott foglalás
  addReservation(username: string, reservation: Reservation) {
    return this.http.post(`${userUrl}/${username}`, reservation);
  }

}
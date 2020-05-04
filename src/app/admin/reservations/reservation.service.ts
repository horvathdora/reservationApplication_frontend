import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from '../../models/apartment';
import { Reservation } from 'src/app/models/reservation';

const reservationUrl = 'http://localhost:8081/api/admin/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(reservationUrl);
  }

  get(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${reservationUrl}/${id}`);
  }

  create(reservation: Reservation) {
    return this.http.post(reservationUrl, reservation);
  }

  update(reservation: Reservation, id: number): Observable<Reservation> {
    return this.http.put<Reservation>(`${reservationUrl}/${id}`, reservation);
  }

  delete(id: number) {
    window.location.reload();
    return this.http.delete(`${reservationUrl}/${id}`);
  }

}
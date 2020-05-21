import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';

const apartmentUrl = 'http://localhost:8081/api/admin/apartments';
const userUrl = 'http://localhost:8081/user';


@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpClient) { }

  getAllApartments(): Observable<Apartment[]>{
    return <Observable<Apartment[]>>this.http.get(apartmentUrl);
  }

  getApartment(id: number): Observable<Apartment> {
    return <Observable<Apartment>>this.http.get(`${apartmentUrl}/${id}`);
  }

  createApartment(apartment: Apartment): Observable<Apartment> {
    return <Observable<Apartment>>this.http.post(apartmentUrl, apartment);
  }

  updateApartment(apartment: Apartment, id: number): Observable<Apartment> {
    return <Observable<Apartment>>this.http.put(`${apartmentUrl}/${id}`, apartment);
  }

  deleteApartment(id: number) {
    window.location.reload();
    return this.http.delete(`${apartmentUrl}/${id}`);
  }

  
  getApartmentsByDate(
    start_date: string,
    end_date: string
  ): Observable<Apartment[]> {
    console.log(`${userUrl}/reservation/apartments/${start_date}/${end_date}`);

    return <Observable<Apartment[]>>this.http.get(
      `${userUrl}/reservation/apartments/${start_date}/${end_date}`
    );
  }

}
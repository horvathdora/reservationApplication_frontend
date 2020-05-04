import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartment } from '../../models/apartment';
import { ApiResponse } from 'src/app/models/api-response';

const apartmentUrl = 'http://localhost:8081/api/admin/apartments';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Apartment[]>{
    return this.http.get<Apartment[]>(apartmentUrl);
  }

  get(id: number): Observable<Apartment> {
    return this.http.get<Apartment>(`${apartmentUrl}/${id}`);
  }

  create(apartment: Apartment) {
    return this.http.post(apartmentUrl, apartment);
  }

  update(apartment: Apartment, id: number): Observable<Apartment> {
    return this.http.put<Apartment>(`${apartmentUrl}/${id}`, apartment);
  }

  delete(id: number) {
    window.location.reload();
    return this.http.delete(`${apartmentUrl}/${id}`);
  }

}
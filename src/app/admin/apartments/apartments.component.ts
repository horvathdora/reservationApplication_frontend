import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartments.service';
import { Observable } from 'rxjs';
import { Apartment } from '../../models/apartment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
})
export class ApartmentsComponent implements OnInit {
  constructor(
    private apartmentService: ApartmentService,
    private router: Router
  ) {}

  apartments: Apartment[];

  getApartments(): void {
    this.apartmentService.getAll().subscribe(
      (data) => {
        this.apartments = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteApartment(apartment: Apartment): void {
    this.apartmentService.delete(apartment.id)
      .subscribe( data => {
        this.apartments = this.apartments.filter(a => a !== apartment);
      })
  };

  editApartment(apartment: Apartment): void {
    window.localStorage.removeItem("editApartmentId");
    window.localStorage.setItem("editApartmentId", apartment.id.toString());
    this.router.navigate(['admin/edit-apartment']);
  };

  addApartment(): void {
    this.router.navigate(['admin/add-apartment']);
  };

  ngOnInit() {
    this.getApartments();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
})
export class ReservationsComponent implements OnInit {
  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {}

  reservations: Reservation[];

  getApartments(): void {
    this.reservationService.getAll().subscribe(
      (data) => {
        this.reservations = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  deleteReservation(reservation: Reservation): void {
    this.reservationService.delete(reservation.id)
      .subscribe( data => {
        this.reservations = this.reservations.filter(a => a !== reservation);
      })
  };

  //ezen még gondolkodom
  editReservation(reservation: Reservation): void {
    window.localStorage.removeItem("editReservationId");
    window.localStorage.setItem("editReservationId", reservation.id.toString());
    this.router.navigate(['admin/edit-reservation']);
  };

  //ez nem kell
  addReservation(): void {
    this.router.navigate(['admin/add-reservation']);
  };

  ngOnInit() {
    this.getApartments();
  }
}

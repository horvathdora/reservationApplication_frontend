import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from '../../../services/reservation.service';

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

  // összes foglalás lekérése adatbázisból
  getReservations(): void {
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
  
  // foglalás törlése
  deleteReservation(reservation: Reservation): void {
    this.reservationService.delete(reservation.id)
      .subscribe( data => {
        this.reservations = this.reservations.filter(a => a !== reservation);
      })
  };

  ngOnInit() {
    this.getReservations();
  }
}

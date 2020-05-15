import { Component, OnInit } from '@angular/core';
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
  ) {}

  reservations: Reservation[];
  variable_beginDate: Date;
  variable_endDate: Date;

  // összes foglalás lekérése adatbázisból
  getReservations(): void {
    this.reservationService.getAll().subscribe(
      (data) => {
        this.reservations = data;
        console.log(data);
        this.reservations.forEach(element => {
          this.variable_beginDate = new Date(element.begin_date);
          this.variable_endDate = new Date(element.end_date);        

          element.display_start = this.variable_beginDate.getFullYear() + '-' + (this.variable_beginDate.getMonth() + 1).toString() + '-' + this.variable_beginDate.getDate();
          element.display_end = this.variable_endDate.getFullYear() + '-' + (this.variable_endDate.getMonth() + 1).toString() + '-' + this.variable_endDate.getDate();
          element.days = this.variable_endDate.getDate() - this.variable_beginDate.getDate();
          element.totalPrice = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(element.price * element.days);
        });
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

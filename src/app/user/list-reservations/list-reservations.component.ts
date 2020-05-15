import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Reservation } from 'src/app/models/reservation';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss']
})
export class ListReservationsComponent implements OnInit {

  constructor(private userService: UserService, 
    private tokenStorage: TokenStorageService, 
    private reservationService: ReservationService) { }

  reservations: Reservation[];
  variable_beginDate: Date;
  variable_endDate: Date;

  get(): void {
    this.userService.getReservations(this.tokenStorage.getUsername()).subscribe(
      (data) => {
        this.reservations = data;
        this.reservations.forEach(element => {
          this.variable_beginDate = new Date(element.begin_date);
          this.variable_endDate = new Date(element.end_date);        

          element.display_start = this.variable_beginDate.getFullYear() + '-' + (this.variable_beginDate.getMonth() + 1).toString() + '-' + this.variable_beginDate.getDate();
          element.display_end = this.variable_endDate.getFullYear() + '-' + (this.variable_endDate.getMonth() + 1).toString() + '-' + this.variable_endDate.getDate();
          element.days = this.variable_endDate.getDate() - this.variable_beginDate.getDate();
          element.totalPrice = new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(element.price * element.days);
        });
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


  ngOnInit(): void {
    this.get();
  }

}

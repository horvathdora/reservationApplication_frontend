import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Reservation } from 'src/app/models/reservation';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss']
})
export class ListReservationsComponent implements OnInit {

  constructor(private userService: UserService, 
    private tokenStorage: TokenStorageService) { }

  reservations: Reservation[];

  get(): void {
    this.userService.getReservations(this.tokenStorage.getUsername()).subscribe(
      (data) => {
        this.reservations = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(reservation: Reservation): void {
    this.userService.deleteReservation(reservation.id)
      .subscribe( data => {
        this.reservations = this.reservations.filter(a => a !== reservation);
      })
  };


  ngOnInit(): void {
    this.get();
  }

}

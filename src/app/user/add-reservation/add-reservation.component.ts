import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';
import { UserService } from 'src/app/services/user.service';
import { Apartment } from 'src/app/models/apartment';
import { User } from 'src/app/models/user';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Reservation } from 'src/app/models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent implements OnInit {
  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  start_date: Date;
  end_date: Date;
  dateSelected: boolean;
  display_start: string;
  display_end: string;
  apartments: Apartment[];
  selected_apartment: Apartment;
  newReservation: Reservation;

  @ViewChild('myDateTimeInput', { static: false })
  myDateTimeInput: jqxDateTimeInputComponent;
  @ViewChild('log', { static: false }) log: ElementRef;
  ngAfterViewInit(): void {
    let date1 = new Date();
    let date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    setTimeout((_) => this.myDateTimeInput.setRange(date1, date2));
    this.start_date = this.myDateTimeInput.getRange().from;
    this.end_date = this.myDateTimeInput.getRange().to;
  }

  dateOnChange(): void {
    let selection = this.myDateTimeInput.getRange();
    if (selection.from != null) {
      this.start_date = this.myDateTimeInput.getRange().from;
      this.end_date = this.myDateTimeInput.getRange().to;
      this.display_start =
        this.start_date.getFullYear().toString() +
        '-' +
        (this.start_date.getMonth() + 1).toString() +
        '-' +
        this.start_date.getDate().toString();
      this.display_end =
        this.end_date.getFullYear().toString() +
        '-' +
        (this.end_date.getMonth() + 1).toString() +
        '-' +
        this.end_date.getDate().toString();
      this.getApartments();
    }
  }

  getApartments() {
    this.userService
      .getReservationsByDate(this.display_start, this.display_end)
      .subscribe((data) => {
        this.apartments = data;
      });
  }

  bookApartment(apartment: Apartment) {
    console.log('eljut ide');
    this.newReservation = new Reservation();
    this.newReservation.apartment = apartment;
    this.newReservation.begin_date = this.start_date.getTime();
    this.newReservation.end_date = this.end_date.getTime();
    console.log(this.start_date.getTime());

    this.userService
      .addReservation(this.tokenStorage.getUsername(), this.newReservation)
      .subscribe();
      this.getApartments();
  }

  ngOnInit(): void {}
}

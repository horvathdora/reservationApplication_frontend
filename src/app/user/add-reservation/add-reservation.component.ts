import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';
import { Apartment } from 'src/app/models/apartment';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { ApartmentService } from 'src/app/services/apartments.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss'],
})
export class AddReservationComponent implements OnInit {
  constructor(
    private reservationService: ReservationService,
    private apartmentService: ApartmentService,
    private tokenStorage: TokenStorageService
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
    // dátumok inicializálása
    let date1 = new Date();
    let date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    //kezdő intervallum beállítása
    setTimeout((_) => this.myDateTimeInput.setRange(date1, date2));
    //kezdő és vég dátum beállítása
    this.start_date = this.myDateTimeInput.getRange().from;
    this.end_date = this.myDateTimeInput.getRange().to;
  }

  //Dátum változás esetén ez a fg hívodik meg
  dateOnChange(): void {
    let selection = this.myDateTimeInput.getRange();  //intervallum lekérése
    if (selection.from != null) {
      this.start_date = this.myDateTimeInput.getRange().from;
      this.end_date = this.myDateTimeInput.getRange().to;
      //dátumok string-é konvertálása, amit url-ben tudunk küldeni a backend-nek
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
    // adott időintervallumban elérhető apartmanok lekérése
    //az időpontokat string-ként adom át a service-nek
    this.apartmentService
      .getApartmentsByDate(this.display_start, this.display_end)
      .subscribe((data) => {
        this.apartments = data;
      });
  }

  // apartman lefoglalása az adott időintervallumban
  bookApartment(apartment: Apartment) {
    //új foglalás inicializálása
    this.newReservation = new Reservation();
    this.newReservation.apartment = apartment;
    this.newReservation.begin_date = this.start_date.getTime();
    this.newReservation.end_date = this.end_date.getTime();

    // foglalás hozzáadása
    this.reservationService
      .addReservation(this.tokenStorage.getUsername(), this.newReservation)
      .subscribe();

      //elérhető apartmanok frissítése
      this.getApartments();
  }

  ngOnInit(): void {}
}

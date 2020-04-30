import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartments.service';
import { Observable } from 'rxjs';
import { Apartment } from './model/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  constructor(private apartmentService: ApartmentService) { }

  apartments: Apartment[];

  getApartments(): void{
    this.apartmentService.getAllApartments()
    .subscribe(
      data => {
        this.apartments = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.getApartments();
  }

}

import { Component, OnInit } from '@angular/core';
import {Apartment} from './model/apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

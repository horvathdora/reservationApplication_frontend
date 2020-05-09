import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApartmentService } from '../apartments.service';
import { Apartment } from 'src/app/models/apartment';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.scss'],
})
export class EditApartmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private apartmentService: ApartmentService
  ) {}

  editForm: FormGroup;
  apartment: Apartment;

  ngOnInit(): void {
    let apartmentId = window.localStorage.getItem('editApartmentId');
    console.log(apartmentId);
    if (!apartmentId) {
      alert('Invalid action.');
      this.router.navigate(['admin/apartments']);
      return;
    }    
    this.apartmentService.getApartment(+apartmentId).subscribe((data) => {
      //this.editForm.setValue(data.result);
      this.apartment = data;
      console.log(this.apartment);
    });
    this.editForm = this.formBuilder.group({
      price: ['', Validators.required],
      num_of_people: ['', Validators.required],
      room_description: ['', Validators.required]
    });
    this.editForm.controls["price"].setValue(this.apartment.price);
    this.editForm.controls["num_of_people"].setValue(this.apartment.num_of_people);
    this.editForm.controls["room_description"].setValue(this.apartment.room_description);
    
  }

  onSubmit() {
    this.apartmentService
      .updateApartment(this.editForm.value, this.apartment.id)
      .pipe(first())
      .subscribe(
        (data) => {
          if (data !== undefined) {
            alert('Apartment updated successfully.');
            this.router.navigate(['admin/apartments']);
          } else {
            alert("Fail! :(");
          }
        },
        (error) => {
          alert(error);
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { ApartmentService } from '../../../apartments.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.scss'],
})
export class AddApartmentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apartmentService: ApartmentService
  ) {}

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({      
      price: ['', Validators.required],
      num_of_people: ['', Validators.required],
      room_description: ['', Validators.required]
    });
  }
  onSubmit() {
    this.apartmentService.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['admin/apartments']);
      });
  }
}

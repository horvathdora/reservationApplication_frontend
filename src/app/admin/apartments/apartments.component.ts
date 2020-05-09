import { Component, OnInit } from '@angular/core';
import { ApartmentService } from './apartments.service';
import { Observable } from 'rxjs';
import { Apartment } from '../../models/apartment';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
})
export class ApartmentsComponent implements OnInit {
  constructor(
    private apartmentService: ApartmentService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  apartments: Array<Apartment>;
  editedApartment: Apartment;
  newApartment: Apartment;
  originalApartment: Apartment;
  edit = false;
  new = false;
  closeResult;

  getApartments(): void {
    this.apartmentService.getAllApartments().subscribe(
      (data) => {
        this.apartments = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteApartment(apartment: Apartment): void {
    this.apartmentService.deleteApartment(apartment.id).subscribe((data) => {
      this.apartments = this.apartments.filter((a) => a !== apartment);
    });
  }
  /*
  editApartment(apartment: Apartment): void {
    window.localStorage.removeItem("editApartmentId");
    window.localStorage.setItem("editApartmentId", apartment.id.toString());
    this.router.navigate(['admin/edit-apartment']);
  };
*/
  //  addApartment(): void {
  //    this.router.navigate(['admin/add-apartment']);
  //  };

  ngOnInit() {
    this.getApartments();
  }

  addApartment(content) {
    this.new = true;
    // this.selectedUser = {...this.originalUser};

    this.newApartment = new Apartment();
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  editApartment(content, apartment: Apartment) {
    this.edit = true;
    this.newApartment = { ...apartment };

    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //A módosított apartmant frissítjük a listában  
    updateArray(newApartment){
    let updateItem = this.apartments.find(this.findIndexToUpdate, newApartment.id);
    let index = this.apartments.indexOf(updateItem);
    this.apartments[index] = newApartment;
  }

  findIndexToUpdate(newApartment) { 
        return newApartment.id === this;
  }

  onSubmit() {
    if (this.new) {
      this.apartmentService
        .createApartment(this.newApartment)
        .subscribe((data) => {
          this.apartments.push(data);
        });
      this.new = false;
    }
    if (this.edit) {
      this.apartmentService
        .updateApartment(this.newApartment, this.newApartment.id)
        .subscribe((data) => {
          this.updateArray(data);
        });
      this.edit = false;
    }
    this.newApartment = undefined;
    this.modalService.dismissAll();
  }

  close() {
    this.modalService.dismissAll();
    this.newApartment = undefined;
    this.originalApartment = undefined;

    this.edit = false;
    this.new = false;
  }
}

import { User } from './user';
import { Apartment } from './apartment';

export class Reservation {
  public id: number;
  public user: User;
  public apartment: Apartment;
  public begin_date: number;
  public end_date: number;
  public num_of_people: number;
  public price: number;

  constructor(){
    this.apartment = new Apartment();
  }
}

import { User } from './user';
import { Apartment } from './apartment';

export class Reservation {
  id: number;
  user: User;
  apartment: Apartment;
  begin_date: Date;
  end_date: Date;
  num_of_people: number;
  price: number;

  constructor(
    id: number,
    user: User,
    apartment: Apartment,
    begin_date: Date,
    end_date: Date,
    num_of_people: number,
    price: number
  ) {
      this.id = id
      this.user = user
      this.apartment = apartment
      this.begin_date = begin_date
      this.end_date = end_date
      this.num_of_people = num_of_people
      this.price = price
  }
}

export class Apartment {
  public id: number;
  public price: number;
  public num_of_people: number;
  public room_description: string;

  constructor(
    id: number,
    price: number,
    num_of_people: number,
    room_description: string
  ) {
    this.id = id;
    this.num_of_people = num_of_people;
    this.price = price;
    this.room_description = room_description;
  }
}

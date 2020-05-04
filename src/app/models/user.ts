import { Role } from './role';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  roles: Role[];
  isAdmin: boolean
  role: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    roles: Role[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }



  checkRole(): string{
    if(this.isAdmin){
      return 'admin';
    } else
    return 'user';
  }
}

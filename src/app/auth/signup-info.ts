export class SignUpInfo {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string[];
    password: string;
 
    constructor(name: string, firstName: string, lastName: string, email: string, password: string) {
        this.name = name;
        this.firstName = this.firstName;
        this.lastName = this.lastName;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
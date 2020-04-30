export class SignUpInfo {
    name: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: string[];
    password: string;
 
    constructor(name: string, firstName: string, lastName: string,  username: string, email: string, password: string) {
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
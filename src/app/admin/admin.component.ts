import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  board: string;
  errorMessage: string;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    
  }
}
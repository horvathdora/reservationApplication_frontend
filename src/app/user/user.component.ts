import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
 
  constructor(private userService: UserService) { }
 
  

  ngOnInit() {
   
  }
}
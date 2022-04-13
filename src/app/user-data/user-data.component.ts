import { Component, OnInit } from '@angular/core';
import data from 'data.json';

 interface Person{
  ID: Number,
  Gender: String,
  Title:String
  FirstName: String,
  Surname: String,
  DateOfBirth: String,
  Age:Number,
  Salary:Number,
  TakeHome:Number,
  IncomeTax:Number,
  NationalInsurance:Number
}

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  //styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor() { }
  
  personData: Person[] = data
  
  ngOnInit(): void {
  }

}

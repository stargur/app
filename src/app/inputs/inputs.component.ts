import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import data from 'data.json';
import {NgForm} from '@angular/forms'
import { fn } from '@angular/compiler/src/output/output_ast';
import { map, Observable, startWith } from 'rxjs';

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
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})

export class InputsComponent implements OnInit {

  @Output() dataHandler = new EventEmitter<{firstName: string, lastName: string, date:string}>()

  constructor() { }
  myControl = new FormControl()
  public personData: Person[] = data
  filter!: Observable<Person[]>;

  submit(form: NgForm){
    let firstName = String(form.value['firstName']) 
    let surName = String(form.value['lastName']) 
    let formDate = String(form.value['date'])   

    let userFound = false

    for(let i = 0 ; i < this.personData.length; i++){
      let obj = this.personData[i]
      let fname = (obj.FirstName).trim()
      let lname = (obj.Surname).trim()
      let date = (obj.DateOfBirth).trim()
      
      
      if(firstName == "" || surName == "" || formDate == ""){
        alert("You have empty fields, please inser data")
        break;
      } else {
        if(fname.includes(firstName) && lname.includes(surName) && date.includes(formDate))
        {
          let tr = document.createElement('tr')
          let td_one = document.createElement('td')
          let td_two = document.createElement('td')
          let td_three = document.createElement('td')
          let td_four = document.createElement('td')

          tr.setAttribute('class', 'table-primary')
          td_one.setAttribute('id', 'fullName')
          td_two.setAttribute('id', 'takeHome')
          td_three.setAttribute('id', 'Tax')
          td_four.setAttribute('id', 'natInsurance')

          let tdArr = [td_one, td_two, td_three, td_four]

          td_one.textContent = `${firstName} ${surName}`
          td_two.textContent = `${obj.TakeHome}`
          td_three.textContent = `${obj.IncomeTax}`
          td_four.textContent = `${obj.NationalInsurance}`

          tdArr.forEach(td =>{
            td.style.fontWeight = 'bold'
            td.style.textAlign = 'center'
          })

          tr.appendChild(td_one)
          tr.appendChild(td_two)
          tr.appendChild(td_three)
          tr.appendChild(td_four)

          Array.from(document.getElementsByTagName('tbody'))[0].appendChild(tr)
         // document.getElementById('fullName')?.appendChild(pFullName)
         // document.getElementById('takeHome')?.appendChild(pTakeHome)
         // document.getElementById('Tax')?.appendChild(pTax)
         // document.getElementById('natInsurance')?.appendChild(pInsurance)

          userFound = true

          break;

        }
      }
      
    }  
    
    if(!userFound){
      var errorElement = document.createElement('p')
      errorElement.textContent = "User does not exist"
      document.getElementById('error')?.appendChild(errorElement) 
    }

    let inputs = Array.from(document.getElementsByTagName('input'))
    inputs.forEach(e => {
      e.value = ""
    })
  }

  ngOnInit(): void {
    this.filter = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.personData.slice())),
    )
  }
   private _filter(name: string): Person[] {
    const filterValue = name.toLowerCase();
    return this.personData.filter(person => person.FirstName.toLowerCase().includes(filterValue));
  }
}


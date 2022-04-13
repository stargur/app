import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  //styleUrls: ['./clear-button.component.css']
})
export class ClearButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clear(_event: any){
    
    let inputs = Array.from(document.getElementsByTagName('input'))
    inputs.forEach(e => {
      e.value = ""
    })
    
    let td = Array.from(document.getElementsByTagName('p'))
    td.forEach(e => {
      e.textContent = ""
    })
  }
}

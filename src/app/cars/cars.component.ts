import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  addCarStatus = '';
  inputText = '';

  constructor(){
  }

  addCar(){
    this.addCarStatus = 'Car added';
  }

  onKeyUp(event: Event){
    this.inputText = (<HTMLInputElement>event.target).value;
  }


}

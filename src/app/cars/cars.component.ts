import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  addCarStatus = '';
  inputText = 'Default Text';

  constructor(){
  }

  addCar(){
    this.addCarStatus = 'Car added';
  }

  onKeyUp(event){
    this.inputText = event.target.value;
  }


}

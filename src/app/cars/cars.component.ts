import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW'];
  items = [{id: 3, name: 'item1'},{id: 6, name: 'item2'},{id: 9, name: 'item3'}];

  constructor(){
  }

  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }


}

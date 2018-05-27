import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW','Mazda','Lada','Bently'];
  dates = [
    new Date(2015,3,4).toDateString(),
    new Date(2016,5,2).toDateString(),
    new Date(2019,7,4).toDateString(),
    new Date(2014,4,6).toDateString(),
  ];

  constructor(){
  }

  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}

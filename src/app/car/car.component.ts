import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

//carName = 'Ford';
//carYear = 2015;
@Input() carItem: {name: string, year: number};

}
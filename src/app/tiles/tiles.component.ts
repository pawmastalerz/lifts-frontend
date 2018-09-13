import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  imgSrc = [ 'ex1.png', 'ex2.png', 'ex3.png', 'ex4.png', 'ex5.png', 'ex6.png' ];
  desc = [
    'Podnośniki Nożycowe Elektryczne',
    'Podnośniki Nożycowe Spalinowe',
    'Podnośniki Teleskopowe Spalinowe',
    'Podnośniki Przegubowe Elektryczne',
    'Podnośniki Przegubowe Spalinowe',
    'Podnośniki Przewoźne'
  ];

  constructor() { }

  ngOnInit() {
  }

}

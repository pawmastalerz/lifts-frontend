import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input()
  imgSrc: string;

  @Input()
  desc: string;

  constructor() { }

  ngOnInit() {
  }

}

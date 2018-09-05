import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent implements OnInit {

  headerImageSrc: string;
  headerLogoSrc: string;

  constructor() {
    this.headerImageSrc = '../../assets/header-image.jpg';
    this.headerLogoSrc = '../../assets/header-logo.png';
  }

  ngOnInit() {
  }

}

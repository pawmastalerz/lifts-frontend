import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.owl-carousel').owlCarousel({

      // ---------------
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      animateIn: 'bounceInLeft',
      animateOut: 'bounceOutRight',
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      responsive: {
        0: {
          autoplay: false,
        },
        576: {
          autoplay: true,
        }
      }
      // ---------------
    });
  }

}

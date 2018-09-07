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
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      lazyLoad: true,
      animateIn: 'bounceInLeft',
      animateOut: 'bounceOutLeft',
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        }
      }
      // ---------------
    });
  }

}

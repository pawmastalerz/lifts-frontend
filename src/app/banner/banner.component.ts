import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerImgSrc = '../../assets/banner.jpg';

  descHeader = 'Poznaj nas bliżej...';
  desc1 = 'Firma RENTAX - podnośniki zajmuje się wynajmem podnośników samojezdnych od roku 2005.';
  desc2 = 'Jesteśmy firmą polską i w Polsce inwestujemy. Stale podnosimy nasze kwalifikacje oraz unowocześniamy flotę, aby w pełni zaspokoić potrzeby naszych klientów.';
  desc3 = 'Celem zabezpieczenia Państwa interesów posiadamy również mobilny serwis, który czuwa nad sprawnością naszego parku maszyn.';
  desc4 = 'Zapraszamy do kontaktu!';

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() data!: CarouselModel[];

  constructor() { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    window.open(url, '_blank');
  }

}
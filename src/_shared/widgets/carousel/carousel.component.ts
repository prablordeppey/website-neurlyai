import {Component, Input, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() data!: CarouselModel[];
  imgs_dir: string = environment['imgs_dir']

  constructor() { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {
    window.open(url, '_blank');
  }

}

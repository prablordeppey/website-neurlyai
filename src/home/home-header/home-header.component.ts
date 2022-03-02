import {Component, HostListener, OnInit} from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  title = 'NeurlyAI';

  redirect_links = environment['redirect_links']

  faCoffee = faCoffee

  constructor() { }

  ngOnInit(): void {
  }


  @HostListener('window:load', ['$event']) onPageLoad($event: any) {
    // $event.target.querySelectorAll('.banner img')
    //   .forEach((image: HTMLImageElement) => {
    //     image.width = 1084
    //     image.height = 361
    //   })
  }

}

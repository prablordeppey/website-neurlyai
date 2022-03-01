import { Component, OnInit } from '@angular/core';
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  go_to_top = faChevronCircleUp

  constructor() { }

  ngOnInit(): void {
  }

}

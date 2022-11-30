import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'NeurlyAI';

  redirect_links = environment['redirect_links']

  faCoffee = faCoffee

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  title = 'NeurlyAI';

  redirect_links = {
    our_email: 'mailto:prablordeppey@gmail.com',
    website_repo: 'https://github.com/prablordeppey',
    youtube_channel: 'https://www.youtube.com/channel/UCFlgJ0SvO5ZWWMJB657_Qdw',
  }

  faCoffee = faCoffee

  constructor() { }

  ngOnInit(): void {
  }
}

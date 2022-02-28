import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  redirectTo(destination: string) {
    const url = (<any>this).redirect_links[destination];
    window.open(url, '_blank');
  }
}

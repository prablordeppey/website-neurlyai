import {Component, OnInit, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  redirect_links = {
    our_email: 'mailto:prablordeppey@gmail.com',
    website_repo: 'https://github.com/prablordeppey',
    youtube_channel: 'https://www.youtube.com/channel/UCFlgJ0SvO5ZWWMJB657_Qdw',
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  redirectTo(destination: string) {
    const url = (<any>this).redirect_links[destination];
    window.open(url, '_blank');
  }

}

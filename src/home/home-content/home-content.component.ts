import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  items!: ItemModel[]

  redirect_links = {
    our_email: 'mailto:prablordeppey@gmail.com',
    website_repo: 'https://github.com/prablordeppey',
    youtube_channel: 'https://www.youtube.com/channel/UCFlgJ0SvO5ZWWMJB657_Qdw',
  }

  constructor(private homeService: HomeService) {
    this.homeService.fetchItems()
  }

  ngOnInit(): void {
    this.items = this.homeService.getItems
  }

  redirectTo(destination: string) {
    const url = (<any>this).redirect_links[destination];
    window.open(url, '_blank');
  }

}

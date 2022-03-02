import {Component, HostListener, OnInit} from '@angular/core';
import {faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";
import {ScrollDispatcher} from "@angular/cdk/overlay";


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

  /**
   * listening for scroll event on DOM.
   * remove goToButton if header insight else, show goToButton
   * @param $event
   */
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    const curr_scrollBar_pos = $event.target.documentElement.scrollTop
    const goToButton = (<HTMLDivElement>document.getElementById('goToButton'))

    //offset size set to 50.
    if (curr_scrollBar_pos > 50){
      goToButton.style.display = 'block'
    }
    else{
      goToButton.style.display = 'none'
    }
  }
}

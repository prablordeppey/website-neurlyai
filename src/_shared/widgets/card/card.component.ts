import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../../../home/home.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: ItemModel[]

  constructor() {}

  ngOnInit(): void {}

}

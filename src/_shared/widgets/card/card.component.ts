import {Component, Input, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: ItemModel[]
  imgs_dir: string = environment['imgs_dir']

  constructor() {}

  ngOnInit(): void {}

}

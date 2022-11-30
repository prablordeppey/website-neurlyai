import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import {HeaderComponent} from "./header/header.component";
import {MaterialModule} from "../modules/material";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CarouselComponent,
  ]
})
export class WidgetsModule { }

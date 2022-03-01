import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CarouselComponent
  ]
})
export class WidgetsModule { }

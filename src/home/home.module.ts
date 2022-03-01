import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import {MaterialModule} from "../_shared/modules/material";
import {WidgetsModule} from "../_shared/widgets/widgets.module";


@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WidgetsModule
  ]
})
export class HomeModule { }

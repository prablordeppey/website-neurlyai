import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";


const material = [
  FontAwesomeModule
]

const morelayout = [
  FormsModule,
  ReactiveFormsModule,
  MatSidenavModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatListModule
]

@NgModule({
  imports: [material, morelayout],
  exports: [material, morelayout]
})
export class MaterialModule { }

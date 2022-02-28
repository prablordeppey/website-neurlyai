import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const material = [
  FontAwesomeModule
]

const morelayout = [
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  imports: [material, morelayout],
  exports: [material, morelayout]
})
export class MaterialModule { }

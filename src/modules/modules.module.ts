import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WidgetsModule} from "../_shared/widgets/widgets.module";
import {TensorSimuclustfactorComponent} from "./tensor-simuclustfactor/tensor-simuclustfactor.component";
import {MaterialModule} from "../_shared/modules/material";
import {MathjaxModule} from "mathjax-angular";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    TensorSimuclustfactorComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule,
    MaterialModule,
    MathjaxModule.forChild(),
    RouterModule
  ]
})
export class ModulesModule { }

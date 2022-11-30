import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLayoutComponent} from "../home/home-layout/home-layout.component";
import {TensorSimuclustfactorComponent} from "../modules/tensor-simuclustfactor/tensor-simuclustfactor.component";


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
  },
  {
    path: '3mode-tensor-simuclustfactor', // child route path
    component: TensorSimuclustfactorComponent, // child route component that the router renders
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

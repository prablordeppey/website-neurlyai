import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeLayoutComponent} from "../home/home-layout/home-layout.component";


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    // children: [
    //   {
    //     path: '', // child route path
    //     component: ChildAComponent, // child route component that the router renders
    //   },
    //   {
    //     path: 'child-b',
    //     component: ChildBComponent, // another child route component that the router renders
    //   },
    // ],
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

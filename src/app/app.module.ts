import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "../home/home.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ModulesModule} from "../modules/modules.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MathjaxModule} from "mathjax-angular";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HomeModule,
    ModulesModule,
    BrowserAnimationsModule,
    MathjaxModule.forRoot({
      "config": {
        "loader": {
          "load": ["output/svg", "[tex]/require", "[tex]/ams"]
        },
        "tex": {
          "inlineMath": [["$", "$"]],
          "packages": ["base", "require", "ams"]
        },
        "svg": { "fontCache": "global" }
      },
      "src": "https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainAreaComponent} from "./main-area/main-area.component";
import {NavBarComponent} from "./main-area/nav-bar/nav-bar.component";
import {FooterComponent} from "./main-area/footer/footer.component";

@NgModule({
  declarations: [
    MainAreaComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {
}

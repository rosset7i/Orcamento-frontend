import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MainAreaComponent} from './main-area/main-area.component';
import {NavBarComponent} from './main-area/nav-bar/nav-bar.component';
import {FooterComponent} from './main-area/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthLayoutComponent} from './main-area/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent,
    NavBarComponent,
    FooterComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    AuthLayoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

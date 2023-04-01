import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PerfilRoutingModule} from './perfil-routing.module';
import {PerfilViewComponent} from './perfil-view/perfil-view.component';

@NgModule({
  declarations: [
    PerfilViewComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule {
}

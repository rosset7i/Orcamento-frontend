import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrcamentoRoutingModule} from './orcamento-routing.module';
import {OrcamentoListComponent} from './orcamento-list/orcamento-list.component';

@NgModule({
  declarations: [
    OrcamentoListComponent
  ],
  imports: [
    CommonModule,
    OrcamentoRoutingModule
  ]
})
export class OrcamentoModule {
}

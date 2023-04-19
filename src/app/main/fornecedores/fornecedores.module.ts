import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FornecedoresRoutingModule} from './fornecedores-routing.module';
import {FornecedoresListComponent} from './fornecedores-list/fornecedores-list.component';


@NgModule({
  declarations: [
    FornecedoresListComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule
  ]
})
export class FornecedoresModule {
}

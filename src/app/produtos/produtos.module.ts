import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProdutosRoutingModule} from './produtos-routing.module';
import {ProdutosListComponent} from './produtos-list/produtos-list.component';

@NgModule({
  declarations: [
    ProdutosListComponent
  ],
  exports: [
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule {
}

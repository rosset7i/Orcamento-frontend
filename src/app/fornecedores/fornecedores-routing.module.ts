import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FornecedoresListComponent} from "./fornecedores-list/fornecedores-list.component";

const routes: Routes = [{path: '', component: FornecedoresListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedoresRoutingModule {
}

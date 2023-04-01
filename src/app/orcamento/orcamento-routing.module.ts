import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrcamentoListComponent} from "./orcamento-list/orcamento-list.component";

const routes: Routes = [{path: '', component: OrcamentoListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentoRoutingModule {
}

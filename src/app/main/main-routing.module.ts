import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainAreaComponent} from "./main-area/main-area.component";

const routes: Routes = [

  {
    path: '',
    component: MainAreaComponent,
    children: [
      {
        path: 'produtos',
        loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
      },
      {
        path: 'fornecedores',
        loadChildren: () => import('./fornecedores/fornecedores.module').then(m => m.FornecedoresModule)
      },
      {
        path: 'orcamentos',
        loadChildren: () => import('./orcamento/orcamento.module').then(m => m.OrcamentoModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

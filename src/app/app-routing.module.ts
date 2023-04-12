import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from "./auth/auth.guard";
import {AuthLayoutComponent} from "./main-area/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'produtos',
    canActivate: [AuthGuard],
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'fornecedores',
    canActivate: [AuthGuard],
    loadChildren: () => import('./fornecedores/fornecedores.module').then(m => m.FornecedoresModule)
  },
  {
    path: 'orcamentos',
    canActivate: [AuthGuard],
    loadChildren: () => import('./orcamento/orcamento.module').then(m => m.OrcamentoModule)
  },
  {
    path: 'perfil',
    canActivate: [AuthGuard],
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrcamentoRoutingModule} from './orcamento-routing.module';
import {OrcamentoListComponent} from './orcamento-list/orcamento-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    OrcamentoListComponent
  ],
  imports: [
    CommonModule,
    OrcamentoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
  ]
})
export class OrcamentoModule {
}

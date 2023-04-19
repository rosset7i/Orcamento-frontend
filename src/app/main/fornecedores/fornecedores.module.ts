import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FornecedoresRoutingModule} from './fornecedores-routing.module';
import {FornecedoresListComponent} from './fornecedores-list/fornecedores-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    FornecedoresListComponent
  ],
  imports: [
    CommonModule,
    FornecedoresRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
  ]
})
export class FornecedoresModule {
}

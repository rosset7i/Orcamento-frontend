import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProdutosRoutingModule} from './produtos-routing.module';
import {ProdutosListComponent} from './produtos-list/produtos-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class ProdutosModule {
}

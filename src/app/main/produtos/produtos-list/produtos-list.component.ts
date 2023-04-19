import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

export interface UserData {
  name: string;
  age: number;
  email: string;
}

const ELEMENT_DATA: UserData[] = [
  {name: 'John Doe', age: 32, email: 'john.doe@example.com'},
  {name: 'Jane Smith', age: 25, email: 'jane.smith@example.com'},
  {name: 'Bob Johnson', age: 47, email: 'bob.johnson@example.com'},
  {name: 'Mary Williams', age: 53, email: 'mary.williams@example.com'},
  {name: 'David Brown', age: 29, email: 'david.brown@example.com'}
];

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'name', 'age', 'email', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {
  }

  ngOnInit(): void {
  }

}

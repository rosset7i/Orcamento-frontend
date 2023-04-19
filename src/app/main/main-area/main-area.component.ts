import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  constructor(private viewport: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    //TODO resolver problema onde se nav tiver pequena ela some quanto a tela deminui
    //TODO migrar para angular utilizando ngClass
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('toggled');
  }

  scrollToTop() {
    this.viewport.scrollToPosition([0, 0]);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  budget = 0;
  constructor() {}

  ngOnInit(): void {
    this.budget = Number(localStorage.getItem('budget'));
  }
}

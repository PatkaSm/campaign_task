import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Campaign app';
  budget = 15000;

  constructor() {
    localStorage.setItem('budget', this.budget.toString());
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="content">
      <h2>Welcome to GadbadMeter</h2>
      <p>Your one-stop solution for measuring gadbad levels!</p>
    </div>
  `,
  styles: [`
    .content {
      padding: 20px;
    }
  `]
})
export class HomeComponent {}
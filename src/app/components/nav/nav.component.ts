import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, RouterLinkActive],
  template: `
    <mat-toolbar color="primary">
      <span>GadbadMeter</span>
      <div class="spacer"></div>
      <button mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
        Home
      </button>
      <button mat-button routerLink="/search" routerLinkActive="active">
        Search
      </button>
      <button mat-button routerLink="/report" routerLinkActive="active">
        Report
      </button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .active {
      background: rgba(255, 255, 255, 0.1);
    }
  `]
})
export class NavComponent {}
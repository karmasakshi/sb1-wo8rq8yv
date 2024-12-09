import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './app/components/home/home.component';
import { SearchComponent } from './app/components/search/search.component';
import { ReportComponent } from './app/components/report/report.component';
import { NavComponent } from './app/components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class App {}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'report', component: ReportComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
});
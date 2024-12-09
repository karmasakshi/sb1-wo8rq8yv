import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: true,
  template: `
    <div class="content">
      <h2>Report</h2>
      <p>Reporting dashboard coming soon...</p>
    </div>
  `,
  styles: [`
    .content {
      padding: 20px;
    }
  `]
})
export class ReportComponent {}
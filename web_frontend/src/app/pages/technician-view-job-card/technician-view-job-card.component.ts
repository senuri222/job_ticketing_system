import { Component } from '@angular/core';
import { TechnicianSidebarComponent } from '../../technician-sidebar/technician-sidebar.component';
import { TechnicianViewJobCardComponent } from '../../technician-view-job-card/technician-view-job-card.component';

@Component({
  standalone: true,
  selector: 'app-technician-view-jobcaed',
  imports: [TechnicianSidebarComponent, TechnicianViewJobCardComponent],
  template: `
    <app-technician-sidebar>
      <app-technician-view-job-card></app-technician-view-job-card>
    </app-technician-sidebar>
  `,
})
export class TechnicianViewjobCardComponent {}
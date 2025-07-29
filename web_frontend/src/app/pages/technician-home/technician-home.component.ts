import { Component } from '@angular/core';
import { TechnicianSidebarComponent } from '../../technician-sidebar/technician-sidebar.component';
import { TechnicianHomeComponent } from '../../technician-home/technician-home.component';

@Component({
  standalone: true,
  selector: 'app-technicianhome',
  imports: [TechnicianSidebarComponent, TechnicianHomeComponent],
  template: `
    <app-technician-sidebar>
      <app-technician-home></app-technician-home>
    </app-technician-sidebar>
  `,
})
export class TechnicianhomeComponent {}
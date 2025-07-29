import { Component } from '@angular/core';
import { TechnicianSidebarComponent } from '../../technician-sidebar/technician-sidebar.component';
import { TechnicianRequestSparePartsComponent } from '../../technician-request-spare-parts/technician-request-spare-parts.component';

@Component({
  standalone: true,
  selector: 'app-technician-requestspareparts',
  imports: [TechnicianSidebarComponent, TechnicianRequestSparePartsComponent],
  template: `
    <app-technician-sidebar>
      <app-technician-request-spare-parts></app-technician-request-spare-parts>
    </app-technician-sidebar>
  `,
})
export class TechnicianRequestSparepartsComponent {}
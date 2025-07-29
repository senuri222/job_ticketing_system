import { Component } from '@angular/core';
import { TechnicianSidebarComponent } from '../../technician-sidebar/technician-sidebar.component';
import { TechnicianMakeQuotationComponent } from '../../technician-make-quotation/technician-make-quotation.component';

@Component({
  standalone: true,
  selector: 'app-technician-makequotation',
  imports: [TechnicianSidebarComponent, TechnicianMakeQuotationComponent],
  template: `
    <app-technician-sidebar>
      <app-technician-make-quotation></app-technician-make-quotation>
    </app-technician-sidebar>
  `,
})
export class TechnicianMakequotationComponent {}
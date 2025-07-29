import { Component } from '@angular/core';
import { TechnicianSidebarComponent } from '../../technician-sidebar/technician-sidebar.component';
import { TechnicianMachineCheckComponent } from '../../technician-machine-check/technician-machine-check.component';

@Component({
  standalone: true,
  selector: 'app-technician-machinecheck',
  imports: [TechnicianSidebarComponent, TechnicianMachineCheckComponent],
  template: `
    <app-technician-sidebar>
      <app-technician-machine-check></app-technician-machine-check>
    </app-technician-sidebar>
  `,
})
export class TechnicianMachinecheckComponent {}
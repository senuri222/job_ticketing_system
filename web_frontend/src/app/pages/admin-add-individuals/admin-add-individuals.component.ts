import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../admin-sidebar/admin-sidebar.component';
import { AdminAddIndividualsComponent } from '../../admin-add-individuals/admin-add-individuals.component';

@Component({
  standalone: true,
  selector: 'app-admin-home',
  imports: [AdminSidebarComponent, AdminAddIndividualsComponent],
  template: `
    <app-admin-sidebar>
        <app-admin-add-individuals></app-admin-add-individuals>
    </app-admin-sidebar>
  `,
})
export class AdminAddIndividualComponent {}


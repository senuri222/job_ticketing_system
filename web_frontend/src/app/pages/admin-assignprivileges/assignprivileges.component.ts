import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../admin-sidebar/admin-sidebar.component';
import { AssignprivilegesComponent } from '../../assignprivileges/assignprivileges.component';

@Component({
  standalone: true,
  selector: 'app-admin-assignprivileges',
  imports: [AdminSidebarComponent, AssignprivilegesComponent],
  template: `
    <app-admin-sidebar>
        <app-assignprivileges></app-assignprivileges>
    </app-admin-sidebar>
  `,
})
export class AdminAssignprivilegesComponent {}
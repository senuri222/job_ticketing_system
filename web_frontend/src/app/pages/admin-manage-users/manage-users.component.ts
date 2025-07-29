import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../admin-sidebar/admin-sidebar.component';
import { ManageUsersComponent } from '../../manage-users/manage-users.component';

@Component({
  standalone: true,
  selector: 'app-admin-manageusers',
  imports: [AdminSidebarComponent, ManageUsersComponent],
  template: `
    <app-admin-sidebar>
      <app-manage-users></app-manage-users>
    </app-admin-sidebar>
  `,
})
export class AdminManageUsersComponent {}
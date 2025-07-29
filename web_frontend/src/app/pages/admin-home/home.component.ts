import { Component } from '@angular/core';
import { AdminSidebarComponent } from '../../admin-sidebar/admin-sidebar.component';
import { HomeComponent } from '../../home/home.component';

@Component({
  standalone: true,
  selector: 'app-admin-home',
  imports: [AdminSidebarComponent, HomeComponent],
  template: `
    <app-admin-sidebar>
        <app-home></app-home>
    </app-admin-sidebar>
  `,
})
export class AdminHomeComponent {}
import { Component } from '@angular/core';
import { TeamLeaderSideBarComponent } from '../../team-leader-side-bar/team-leader-side-bar.component';
import { TeamLeaderInventoryManagementComponent } from '../../team-leader-inventory-management/team-leader-inventory-management.component';

@Component({
  standalone: true,
  selector: 'app-teamleader-inventorymanagement',
  imports: [TeamLeaderSideBarComponent, TeamLeaderInventoryManagementComponent],
  template: `
    <app-team-leader-side-bar>
      <app-team-leader-inventory-management></app-team-leader-inventory-management>
    </app-team-leader-side-bar>
  `,
})
export class TeamLeaderInventorymanagementComponent {}
import { Component } from '@angular/core';
import { TeamLeaderSideBarComponent } from '../../team-leader-side-bar/team-leader-side-bar.component';
import { TeamLeaderSparePartsRequestComponent } from '../../team-leader-spare-parts-request/team-leader-spare-parts-request.component';

@Component({
  standalone: true,
  selector: 'app-teamleader-sparePartRequest',
  imports: [TeamLeaderSideBarComponent, TeamLeaderSparePartsRequestComponent],
  template: `
    <app-team-leader-side-bar>
      <app-team-leader-spare-parts-request></app-team-leader-spare-parts-request>
    </app-team-leader-side-bar>
  `,
})
export class TeamLeaderSparePartRequestComponent {}
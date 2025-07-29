import { Component } from '@angular/core';
import { TeamLeaderSideBarComponent } from '../../team-leader-side-bar/team-leader-side-bar.component';
import { TeamLeaderViewJobCardComponent } from '../../team-leader-view-job-card/team-leader-view-job-card.component';

@Component({
  standalone: true,
  selector: 'app-teamleader-viewjobcard',
  imports: [TeamLeaderSideBarComponent, TeamLeaderViewJobCardComponent],
  template: `
    <app-team-leader-side-bar>
      <app-team-leader-view-job-card></app-team-leader-view-job-card>
    </app-team-leader-side-bar>
  `,
})
export class TeamLeaderViewjobCardComponent {}
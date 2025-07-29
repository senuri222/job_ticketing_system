import { Component } from '@angular/core';
import { TeamLeaderSideBarComponent } from '../../team-leader-side-bar/team-leader-side-bar.component';
import { TeamLeaderCreateJobCardComponent } from '../../team-leader-create-job-card/team-leader-create-job-card.component';

@Component({
  standalone: true,
  selector: 'app-teamleader-createjobcard',
  imports: [TeamLeaderSideBarComponent, TeamLeaderCreateJobCardComponent],
  template: `
    <app-team-leader-side-bar>
      <app-team-leader-create-job-card></app-team-leader-create-job-card>
    </app-team-leader-side-bar>
  `,
})
export class TeamLeaderCreateJobCardsComponent {}
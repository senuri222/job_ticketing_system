import { Component } from '@angular/core';
import { TeamLeaderSideBarComponent } from '../../team-leader-side-bar/team-leader-side-bar.component';
import { TeamLeaderAssignJobsComponent } from '../../team-leader-assign-jobs/team-leader-assign-jobs.component';

@Component({
  standalone: true,
  selector: 'app-teamleader-assignjobs',
  imports: [TeamLeaderSideBarComponent, TeamLeaderAssignJobsComponent],
  template: `
    <app-team-leader-side-bar>
      <app-team-leader-assign-jobs></app-team-leader-assign-jobs>
    </app-team-leader-side-bar>
  `,
})
export class TeamLeaderAssignJobComponent {}
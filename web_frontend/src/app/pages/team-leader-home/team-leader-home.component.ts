import { Component } from '@angular/core';
import { TeamLeaderSideBarComponent } from '../../team-leader-side-bar/team-leader-side-bar.component';
import { TeamLeaderHomeComponent } from '../../team-leader-home/team-leader-home.component';

@Component({
  standalone: true,
  selector: 'app-teamleader-home',
  imports: [TeamLeaderSideBarComponent, TeamLeaderHomeComponent],
  template: `
    <app-team-leader-side-bar>
      <app-team-leader-home></app-team-leader-home>
    </app-team-leader-side-bar>
  `,
})
export class TeamleaderHomeComponent {}
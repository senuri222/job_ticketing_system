import { Component } from '@angular/core';
import { TeamLeaderSideBarComponent } from '../../team-leader-side-bar/team-leader-side-bar.component';
import { TeamLeaderViewQuotationComponent } from '../../team-leader-view-quotation/team-leader-view-quotation.component';

@Component({
  standalone: true,
  selector: 'app-teamleader-viewquotation',
  imports: [TeamLeaderSideBarComponent, TeamLeaderViewQuotationComponent],
  template: `
    <app-team-leader-side-bar>
      <app-team-leader-view-quotation></app-team-leader-view-quotation>
    </app-team-leader-side-bar>
  `,
})
export class TeamLeaderViewquotationComponent {}
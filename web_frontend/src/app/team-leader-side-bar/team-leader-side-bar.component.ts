import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-leader-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-leader-side-bar.component.html',
  styleUrl: './team-leader-side-bar.component.css'
})
export class TeamLeaderSideBarComponent {
  isSidebarOpen = true;
}

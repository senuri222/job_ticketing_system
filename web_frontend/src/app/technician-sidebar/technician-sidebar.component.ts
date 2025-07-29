import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technician-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technician-sidebar.component.html',
  styleUrl: './technician-sidebar.component.css'
})
export class TechnicianSidebarComponent {
  open = false;

  onClickOutside(event: Event): void {
    const clickedInside = (event.target as HTMLElement).closest('.md\\:flex');
    if (!clickedInside) {
      this.open = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-leader-create-job-card',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,DatePipe],
  templateUrl: './team-leader-create-job-card.component.html',
  styleUrl: './team-leader-create-job-card.component.css'
})
export class TeamLeaderCreateJobCardComponent implements OnInit {

 technicians: any[] = [];
  machines: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTechnicians();
    this.fetchMachines();
  }

  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  fetchTechnicians() {
    const headers = this.getAuthHeaders();

    this.http.get<any[]>('http://localhost:3000/api/users/role/technician', { headers })
      .subscribe({
        next: (res) => this.technicians = res,
        error: (err) => console.error('Failed to load technicians:', err)
      });
  }

  fetchMachines() {
    const headers = this.getAuthHeaders();

    this.http.get<any[]>('http://localhost:3000/api/machineSubmit/machine', { headers })
      .subscribe({
        next: (res) => this.machines = res,
        error: (err) => console.error('Failed to load machines:', err)
      });
  }

  convertToDate(dateStr: string): Date | null {
    if (!dateStr) return null;

    try {
      // Firestore gives: "25 June 2025 at 01:12:44 UTC+5:30"
      // Remove "at" and convert to ISO format
      const cleaned = dateStr.replace(' at ', ' ');
      const parsed = new Date(cleaned);

      return isNaN(parsed.getTime()) ? null : parsed;
    } catch (e) {
      return null;
    }
  }

  convertTimestamp(timestamp: any): Date | null {
  if (!timestamp) return null;

  // Check for Firestore-style object with _seconds
  if (timestamp._seconds) {
    return new Date(timestamp._seconds * 1000);
  }

  // If it's already a valid Date
  if (timestamp instanceof Date) return timestamp;

  // If it's a string, try parsing
  const parsed = new Date(timestamp);
  return isNaN(parsed.getTime()) ? null : parsed;
}



}

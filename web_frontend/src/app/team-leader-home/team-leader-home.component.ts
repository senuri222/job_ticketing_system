import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';

interface JWTPayload {
  email: string;
  role: string;
  uid: string;
  exp: number;
  iat: number;
}

@Component({
  selector: 'app-team-leader-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-leader-home.component.html',
  styleUrl: './team-leader-home.component.css'
})
export class TeamLeaderHomeComponent implements OnInit {
  userProfile: any = null;
  userEmail: string = '';

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
      const token = localStorage.getItem('token');
      if (token) {
        const decoded = jwtDecode<JWTPayload>(token);
        this.userEmail = decoded.email;
        this.loadUserProfile();
      }
    }

    loadUserProfile() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get(`http://localhost:3000/api/users/email/${this.userEmail}`, { headers })
      .subscribe(
        (res: any) => {
          this.userProfile = res;
        },
        err => {
          console.error('Failed to load user profile', err);
        }
      );
  }
}

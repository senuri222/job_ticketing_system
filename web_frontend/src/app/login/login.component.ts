import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:3000/api/auth/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        const token = res.token;
        const role = res.role;

        // Store token in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        // Navigate based on role
        if (role === 'admin') {
          this.router.navigate(['/adminhome']);
        } else if (role === 'teamleader') {
          this.router.navigate(['/teamleaderhome']);
        } else if (role === 'technician') {
          this.router.navigate(['/technicianhome']);
        } else {
          this.errorMessage = 'Unknown user role!';
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }

}

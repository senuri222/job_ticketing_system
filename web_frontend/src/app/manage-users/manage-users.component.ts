import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})

export class ManageUsersComponent implements OnInit {
  user = {
    name: '',
    nicno: '',
    mobileno: '',
    address: '',
    email: '',
    password: '',
    gender: '',
    role: ''
  };

  selectedUserId: string | null = null; // for update/delete

  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const token = localStorage.getItem('token'); // assuming token is stored on login
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:3000/api/users', { headers })
      .subscribe({
        next: (res) => {
          this.users = res;
        },
        error: (err) => {
          console.error('Failed to load users:', err);
        }
      });
  }

  onSubmit() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    if (!this.selectedUserId) {
      // Create new user
      this.http.post('http://localhost:3000/api/users', this.user, { headers })
        .subscribe(res => {
          alert('User added');
          this.fetchUsers();
          this.resetForm();
        });
    } else {
      // Update existing user
      this.http.put(`http://localhost:3000/api/users/${this.selectedUserId}`, this.user, { headers })
        .subscribe(res => {
          alert('User updated');
          this.fetchUsers();
          this.resetForm();
        });
    }
  }

  deleteUser() {
  if (!this.selectedUserId) {
    alert('Select a user first!');
    return;
  }

  const token = localStorage.getItem('token');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.delete(`http://localhost:3000/api/users/${this.selectedUserId}`, { headers })
    .subscribe(res => {
      alert('User deleted');
      this.fetchUsers();
      this.resetForm();
    });
  }

  selectUser(user: any) {
    this.user = { ...user };
    this.selectedUserId = user.id;
  }

  searchEmail = '';

  searchUserByEmail() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get(`http://localhost:3000/api/users/email/${this.searchEmail}`, { headers })
      .subscribe((user: any) => {
        this.users = [user]; // replace table with just this user
      }, err => {
        alert('User not found');
      });
  }

  resetForm() {
    this.user = {
      name: '',
      nicno: '',
      mobileno: '',
      address: '',
      email: '',
      password: '',
      gender: '',
      role: ''
    };
    this.selectedUserId = null;
  }

  resetSearch() {
    this.searchEmail = '';
    this.fetchUsers();
  }


}
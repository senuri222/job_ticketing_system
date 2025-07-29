import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

interface Privilege {
  id: string;
  action: string;
  admin: boolean;
  manager: boolean;
  technician: boolean;
  customer: boolean;
  teamleader: boolean;
  date: string;
}

@Component({
  selector: 'app-assignprivileges',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './assignprivileges.component.html',
  styleUrl: './assignprivileges.component.css'
})

export class AssignprivilegesComponent implements OnInit {
  privileges: any[] = [];
  actionInput = '';
  selectedPrivilegeId: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPrivileges();
  }

  fetchPrivileges() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any[]>('http://localhost:3000/api/privileges', { headers })
      .subscribe(res => {
        this.privileges = res;
      });
  }

  submitAction() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const actionValue = this.actionInput.trim();

    if (!actionValue) {
      alert('Action is required.');
      return;
    }

    if (!this.selectedPrivilegeId) {
      // Create new privilege with only 'action' field
      this.http.post('http://localhost:3000/api/privileges/', { action: actionValue }, { headers })
        .subscribe(() => {
          alert('Action added');
          this.resetForm();
          this.fetchPrivileges();
        });
    } else {
      // Update existing privilege
      this.http.put(`http://localhost:3000/api/privileges/${this.selectedPrivilegeId}`, { action: actionValue }, { headers })
        .subscribe(() => {
          alert('Action updated');
          this.resetForm();
          this.fetchPrivileges();
        });
    }
  }

  editPrivilege(priv: any) {
    this.selectedPrivilegeId = priv.id;
    this.actionInput = priv.action;
  }

  deletePrivilege(id: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.delete(`http://localhost:3000/api/privileges/${id}`, { headers })
      .subscribe(() => {
        alert('Privilege deleted');
        this.fetchPrivileges();
      });
  }

  toggleRole(priv: any, role: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const updated = { [role]: !priv[role] };

    this.http.put(`http://localhost:3000/api/privileges/${priv.id}`, updated, { headers })
      .subscribe(() => {
        priv[role] = !priv[role];
      });
  }

  resetForm() {
    this.selectedPrivilegeId = null;
    this.actionInput = '';
  }

  getAssignedRoles(priv: any): string[] {
    const roles = [];

    if (priv.admin) roles.push('Admin');
    if (priv.teamleader) roles.push('Team Leader');
    if (priv.technician) roles.push('Technician');
    if (priv.manager) roles.push('Manager');
    if (priv.customer) roles.push('Customer');

    return roles;
  }

}
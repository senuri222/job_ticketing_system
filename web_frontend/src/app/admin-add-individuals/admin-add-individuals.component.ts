import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-add-individuals',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, HttpClientModule],
  templateUrl: './admin-add-individuals.component.html',
  styleUrl: './admin-add-individuals.component.css'
})

export class AdminAddIndividualsComponent implements OnInit {

  // Spare Part Model
  sparePart = {
    id: '',
    spno: '',
    spname: '',
    partType: '',
    seller: '',
    buyingPrice: '',
    sellingPrice: '',
    quentity: '',
    modal: '',
    remark: ''
  };

  sparePartsList: any[] = [];
  selectedSparePartId: string | null = null;

  search = {
    spno: '',
    spname: '',
    partType: '',
    modal: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchSpareParts();
  }

  getAuthHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // CREATE or UPDATE
  createSparepart() {
    const headers = this.getAuthHeaders();

    if (!this.selectedSparePartId) {
      // Create
      this.http.post('http://localhost:3000/api/sparepart', this.sparePart, { headers })
        .subscribe({
          next: () => {
            alert('Spare Part Added');
            this.fetchSpareParts();
            this.resetForm();
          },
          error: (err) => {
            console.error(err);
            alert(err.error?.message || 'Error adding spare part');
          }
        });
    } else {
      // Update
      this.http.put(`http://localhost:3000/api/sparepart/${this.selectedSparePartId}`, this.sparePart, { headers })
        .subscribe({
          next: () => {
            alert('Spare Part Updated');
            this.fetchSpareParts();
            this.resetForm();
            console.log(this.selectedSparePartId);
          },
          error: (err) => {
            console.error(err);
            alert('Error updating spare part');
          }
        });
    }
  }

  // FETCH ALL
  fetchSpareParts() {
    const headers = this.getAuthHeaders();

    this.http.get<any[]>('http://localhost:3000/api/sparepart', { headers })
      .subscribe({
        next: (res) => {
          this.sparePartsList = res;
        },
        error: (err) => {
          console.error('Failed to load spare parts:', err);
        }
      });
  }

  // DELETE (soft delete)
  onSubmit() {
  if (!this.selectedSparePartId) {
    alert('Select a spare part first!');
    return;
  }

  const headers = this.getAuthHeaders(); // only if using JWT auth

  this.http.delete(`http://localhost:3000/api/sparepart/${this.selectedSparePartId}`, { headers })
    .subscribe({
      next: () => {
        alert('Spare Part Deleted');
        this.fetchSpareParts();  // reload updated list
        this.resetForm();        // clear the form
        console.log('Deleted ID:', this.selectedSparePartId);
        this.selectedSparePartId = null; // optional reset
      },
      error: (err) => {
        console.error(err);
        alert('Error deleting spare part');
      }
    });
}


  // SELECT for editing
  selectSparePart(part: any) {
    // this.sparePart = { ...part };
    // this.selectedSparePartId = part.id;
    this.selectedSparePartId = part.id;
  this.sparePart = { ...part };
  }

  // SEARCH
  searchSpareParts() {
    const headers = this.getAuthHeaders();
    const params = { ...this.search };

    this.http.get<any[]>('http://localhost:3000/api/sparepart/spareparts/search', { headers, params })
      .subscribe({
        next: (res) => {
          this.sparePartsList = res;
        },
        error: (err) => {
          console.error(err);
          alert('No matching spare parts found');
        }
      });
  }

  // RESET
  resetForm() {
    this.sparePart = {
      id: '',
      spno: '',
      spname: '',
      partType: '',
      seller: '',
      buyingPrice: '',
      sellingPrice: '',
      quentity: '',
      modal: '',
      remark: ''
    };
    this.selectedSparePartId = null;
  }

  resetSearch() {
    this.search = {
      spno: '',
      spname: '',
      partType: '',
      modal: ''
    };
    this.fetchSpareParts();
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private http = inject(HttpClient);

  // --- Form State -- -
  formData = {
    name: '',
    email: '',
    phone: '',
    city: '',
    loanType: '',
    loanAmount: '',
    message: ''
  };
  successMessage = '';
  errorMessage = '';

  // --- Form Submission Method ---
  submitForm() {
    this.successMessage = '';
    this.errorMessage = '';
    const backendUrl = 'http://localhost:5000/api/leads';

    this.http.post(backendUrl, this.formData).subscribe({
      next: (response: any) => {
        this.successMessage = response.message || 'Your request has been sent successfully.';
        this.formData = { name: '', email: '', phone: '', city: '', loanType: '', loanAmount: '', message: '' };
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'An error occurred. Please try again.';
      }
    });
  }
}
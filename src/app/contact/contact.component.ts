import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private submissionCount = 0;
  private lastSubmissionTime = 0;
  private readonly MAX_SUBMISSIONS = 3;
  private readonly SUBMISSION_WINDOW = 15 * 60 * 1000; // 15 minutes

  // --- Form State with validation ---
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
  isSubmitting = false;
  isFormDisabled = false;

  // Video consultation properties
  consultationDate: string = '';
  selectedPlatform: string = 'zoom';
  minDate: string = '';

  constructor() {
    // Set minimum date to current date and time
    const now = new Date();
    this.minDate = now.toISOString().slice(0, 16);
    
    // Check if user has exceeded submission limit
    this.checkSubmissionLimit();
  }

  ngOnInit() {
    // Additional security checks
    this.detectAutomation();
    this.preventFormTampering();
  }



  // Security: Check submission rate limiting
  private checkSubmissionLimit(): void {
    const stored = localStorage.getItem('karzamaaf_submissions');
    if (stored) {
      const data = JSON.parse(stored);
      const now = Date.now();
      
      // Reset if window has passed
      if (now - data.firstSubmission > this.SUBMISSION_WINDOW) {
        localStorage.removeItem('karzamaaf_submissions');
        this.submissionCount = 0;
      } else {
        this.submissionCount = data.count;
        if (this.submissionCount >= this.MAX_SUBMISSIONS) {
          this.isFormDisabled = true;
          this.errorMessage = 'Too many submissions. Please try again later or call us directly.';
        }
      }
    }
  }

  // Security: Detect automation/bots
  private detectAutomation(): void {
    // Check if form is filled too quickly (bot detection)
    const startTime = Date.now();
    
    // Monitor typing patterns
    let keystrokes = 0;
    document.addEventListener('keydown', () => {
      keystrokes++;
      const timeDiff = Date.now() - startTime;
      
      // If too many keystrokes in short time, likely a bot
      if (keystrokes > 50 && timeDiff < 5000) {
        this.isFormDisabled = true;
        this.errorMessage = 'Automated submissions are not allowed. Please contact us directly.';
      }
    });
  }

  // Security: Prevent form tampering
  private preventFormTampering(): void {
    // Monitor for suspicious form modifications
    const originalFormData = { ...this.formData };
    
    setInterval(() => {
      // Check for unexpected form modifications
      const currentKeys = Object.keys(this.formData);
      const originalKeys = Object.keys(originalFormData);
      
      if (currentKeys.length !== originalKeys.length) {
        console.warn('Form tampering detected');
        this.isFormDisabled = true;
        this.errorMessage = 'Form validation failed. Please refresh the page.';
      }
    }, 1000);
  }

  // Enhanced form validation
  private validateForm(): boolean {
    // Reset messages
    this.errorMessage = '';

    // Name validation
    if (!this.formData.name || this.formData.name.trim().length < 2) {
      this.errorMessage = 'Please enter a valid name (minimum 2 characters).';
      return false;
    }

    if (this.formData.name.length > 100) {
      this.errorMessage = 'Name is too long (maximum 100 characters).';
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }

    // Block disposable email domains
    const disposableDomains = ['10minutemail.com', 'tempmail.org', 'guerrillamail.com', 'mailinator.com'];
    const emailDomain = this.formData.email.split('@')[1];
    if (disposableDomains.includes(emailDomain)) {
      this.errorMessage = 'Disposable email addresses are not allowed.';
      return false;
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
    if (!phoneRegex.test(this.formData.phone)) {
      this.errorMessage = 'Please enter a valid phone number.';
      return false;
    }

    // Message validation
    if (!this.formData.message || this.formData.message.trim().length < 10) {
      this.errorMessage = 'Please enter a message (minimum 10 characters).';
      return false;
    }

    if (this.formData.message.length > 1000) {
      this.errorMessage = 'Message is too long (maximum 1000 characters).';
      return false;
    }

    // Check for suspicious content
    const suspiciousPatterns = [
      /<script/i, /javascript:/i, /onclick/i, /onerror/i,
      /eval\(/i, /alert\(/i, /document\./i, /window\./i
    ];

    const allText = Object.values(this.formData).join(' ');
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allText)) {
        this.errorMessage = 'Invalid content detected. Please remove any special characters or scripts.';
        return false;
      }
    }

    return true;
  }

  // Security: Sanitize input data
  private sanitizeData(): any {
    const sanitized = { ...this.formData };
    
    // Remove potentially dangerous characters
    Object.keys(sanitized).forEach(key => {
      const value = (sanitized as any)[key];
      if (typeof value === 'string') {
        (sanitized as any)[key] = value
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/[<>'"&]/g, '') // Remove dangerous characters
          .trim();
      }
    });

    return sanitized;
  }

  // Enhanced form submission with security
  submitForm() {
    console.log('🚀 Form submission started');
    
    // Check if form is disabled
    if (this.isFormDisabled || this.isSubmitting) {
      console.log('❌ Form is disabled or already submitting');
      return;
    }

    // Check submission rate limiting
    if (this.submissionCount >= this.MAX_SUBMISSIONS) {
      console.log('❌ Max submissions reached');
      this.errorMessage = 'Too many submissions. Please try again later or call us directly.';
      return;
    }

    // Validate form
    if (!this.validateForm()) {
      console.log('❌ Form validation failed');
      return;
    }

    console.log('✅ Form validation passed');
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Sanitize data
    const sanitizedData = this.sanitizeData();
    console.log('📦 Sanitized data:', sanitizedData);

    // Use environment-based URL
    const backendUrl = environment.production 
      ? 'https://api.karzamaaf.com/api/leads' 
      : 'http://localhost:5000/api/leads';
    
    console.log('🌐 Backend URL:', backendUrl);

    // Enhanced HTTP headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });

    console.log('📡 Making HTTP request...');
    this.http.post(backendUrl, sanitizedData, { headers }).subscribe({
      next: (response: any) => {
        console.log('✅ Success response:', response);
        this.successMessage = response.message || 'Your request has been sent successfully.';
        
        // Reset form
        this.formData = { 
          name: '', email: '', phone: '', city: '', 
          loanType: '', loanAmount: '', message: '' 
        };

        // Update submission tracking
        this.updateSubmissionCount();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('❌ HTTP Error:', error);
        console.error('❌ Error status:', error.status);
        console.error('❌ Error message:', error.message);
        console.error('❌ Full error object:', error);
        this.errorMessage = error.error?.message || 'An error occurred. Please try again or call us directly.';
        this.isSubmitting = false;
      }
    });
  }

  // Track submissions for rate limiting
  private updateSubmissionCount(): void {
    this.submissionCount++;
    const now = Date.now();
    
    const submissionData = {
      count: this.submissionCount,
      firstSubmission: this.lastSubmissionTime || now
    };
    
    localStorage.setItem('karzamaaf_submissions', JSON.stringify(submissionData));
    this.lastSubmissionTime = now;

    if (this.submissionCount >= this.MAX_SUBMISSIONS) {
      this.isFormDisabled = true;
      this.errorMessage = 'Maximum submissions reached. Please call us directly for immediate assistance.';
    }
  }

  // Enhanced video consultation booking
  bookConsultation() {
    if (this.isFormDisabled) {
      return;
    }

    if (!this.consultationDate) {
      this.errorMessage = 'Please select a date and time for consultation.';
      return;
    }

    // Validate consultation date
    const selectedDate = new Date(this.consultationDate);
    const now = new Date();
    
    if (selectedDate <= now) {
      this.errorMessage = 'Please select a future date and time.';
      return;
    }

    // Check if date is too far in future (max 30 days)
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    
    if (selectedDate > maxDate) {
      this.errorMessage = 'Please select a date within the next 30 days.';
      return;
    }

    const consultationData = {
      date: this.consultationDate,
      platform: this.selectedPlatform,
      type: 'video_consultation',
      timestamp: new Date().toISOString()
    };

    console.log('Booking consultation:', consultationData);
    
    this.successMessage = `Free 10-minute video consultation booked for ${selectedDate.toLocaleString()} on ${this.selectedPlatform}. You will receive a meeting link via email.`;
    this.errorMessage = '';
    
    // Reset form
    this.consultationDate = '';
    this.selectedPlatform = 'zoom';
  }

  // Security: Clear sensitive data on component destroy
  ngOnDestroy() {
    // Clear form data
    this.formData = { 
      name: '', email: '', phone: '', city: '', 
      loanType: '', loanAmount: '', message: '' 
    };
  }
}

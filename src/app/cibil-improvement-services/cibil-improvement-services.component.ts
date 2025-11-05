import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cibil-improvement-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './cibil-improvement-services.component.html',
  styleUrls: ['./cibil-improvement-services.component.scss']
})
export class CibilImprovementServicesComponent implements OnInit {
  contactForm: FormGroup;

  benefits = [
    {
      icon: 'fas fa-rocket',
      title: 'Faster Loan Approvals',
      description: 'Get instant approvals for loans with excellent credit scores, reducing waiting time and paperwork significantly.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      statValue: '2x',
      statText: 'Faster Approvals'
    },
    {
      icon: 'fas fa-percent',
      title: 'Lower Interest Rates',
      description: 'Enjoy significantly reduced interest rates on all financial products, saving lakhs over loan tenure.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      statValue: '3-5%',
      statText: 'Lower Rates'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Higher Credit Limits',
      description: 'Access premium credit cards and higher limits, giving you more purchasing power and flexibility.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      statValue: '5x',
      statText: 'Higher Limits'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Better Investment Options',
      description: 'Unlock premium financial products, investment opportunities, and exclusive banking services.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      statValue: '10+',
      statText: 'New Options'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Stronger Negotiating Power',
      description: 'Negotiate better terms, conditions, and rates with lenders backed by your excellent credit history.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      statValue: '40%',
      statText: 'Better Terms'
    }
  ];

  services = [
    {
      icon: 'fas fa-search',
      title: 'Credit Report Analysis',
      description: 'Comprehensive 360-degree analysis of your credit report to identify errors, negative factors, and improvement opportunities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Detailed report review', 'Error identification', 'Score factor analysis', 'Personalized recommendations'],
      duration: '2-3 Days'
    },
    {
      icon: 'fas fa-gavel',
      title: 'Dispute Resolution',
      description: 'Professional legal assistance in disputing incorrect entries and resolving credit issues with banks and credit bureaus.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Legal dispute filing', 'Bank negotiations', 'Documentation support', 'Follow-up services'],
      duration: '30-45 Days'
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Improvement Strategy',
      description: 'Customized credit improvement strategies and action plans tailored to your specific financial situation and goals.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Custom improvement roadmap', 'Timeline-based goals', 'Progress tracking', 'Regular updates'],
      duration: 'Ongoing'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Continuous Monitoring',
      description: 'Ongoing monitoring and optimization of your credit score with expert support throughout your improvement journey.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Monthly score monitoring', '24/7 expert support', 'Alert notifications', 'Progress reports'],
      duration: '6-12 Months'
    }
  ];

  successStories = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      oldScore: 580,
      newScore: 750,
      improvement: 170,
      testimonial: 'Thanks to their expert guidance, I went from loan rejections to getting approved for my dream home loan at the best interest rates!',
      achievement: 'Home Loan Approved - ₹50 Lakhs'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi, India',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b886?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      oldScore: 620,
      newScore: 780,
      improvement: 160,
      testimonial: 'The personalized approach and constant support helped me achieve an excellent credit score. Now I have access to premium credit cards!',
      achievement: 'Premium Credit Card - ₹10L Limit'
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      oldScore: 540,
      newScore: 720,
      improvement: 180,
      testimonial: 'From a poor credit score to excellent rating in just 8 months. Their dispute resolution process is incredibly effective!',
      achievement: 'Business Loan Approved - ₹25 Lakhs'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      currentScore: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Add scroll animations
    this.addScrollAnimations();
  }

  scrollToContact(): void {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission logic here
      alert('Thank you for your inquiry! Our credit experts will contact you within 24 hours with your free analysis.');
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  private addScrollAnimations(): void {
    // Simple intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    });

    // Observe all elements with animation classes
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-fade-in-up');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}
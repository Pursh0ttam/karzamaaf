import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Testimonial {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(200, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  // --- Testimonial Carousel State ---
  currentTestimonialIndex = 0;
  private testimonialInterval: any;

  testimonials: Testimonial[] = [
    {
      quote: "KarzaMaaf saved my business and my family. The harassment stopped immediately, and I settled for just 37% of my original debt.",
      author: "Rajesh Kumar"
    },
    {
      quote: "Multiple credit card debts were overwhelming me. Now I'm debt-free and my CIBIL score has improved by 200 points!",
      author: "Priya Sharma"
    },
    {
      quote: "Professional, transparent, and effective. They turned my financial nightmare into a success story. Highly recommended!",
      author: "Amit Patel"
    },
    {
      quote: "The team was compassionate and understanding. They negotiated a settlement that gave me my life back.",
      author: "Sunita Singh"
    },
    {
      quote: "I was skeptical at first, but the results speak for themselves. 60% debt reduction and no more harassment calls.",
      author: "Vikram Gupta"
    }
  ];

  // --- Stats Counter Properties ---
  clientsServed = { current: 0, target: 1000 };
  debtHandled = { current: 0, target: 50 };
  satisfaction = { current: 0, target: 98 };

  // --- FAQ State ---
  openFaq: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.startCounterAnimation();
    this.startTestimonialAutoplay();
  }

  ngOnDestroy(): void {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  // --- Testimonial Carousel Methods ---
  nextTestimonial(): void {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonialIndex = this.currentTestimonialIndex === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonialIndex - 1;
  }

  goToTestimonial(index: number): void {
    this.currentTestimonialIndex = index;
  }

  private startTestimonialAutoplay(): void {
    this.testimonialInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds
  }

  // --- FAQ Methods ---
  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }

  // --- Counter Animation Methods ---
  private startCounterAnimation(): void {
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter('clientsServed', 2000);
          this.animateCounter('debtHandled', 2000);
          this.animateCounter('satisfaction', 2000);
          observer.unobserve(entry.target);
        }
      });
    });

    // Observe stats section when it becomes visible
    setTimeout(() => {
      const statsSection = document.querySelector('[data-stats-section]');
      if (statsSection) {
        observer.observe(statsSection);
      } else {
        // Fallback if observer doesn't work
        this.animateCounter('clientsServed', 2000);
        this.animateCounter('debtHandled', 2000);
        this.animateCounter('satisfaction', 2000);
      }
    }, 100);
  }

  private animateCounter(property: 'clientsServed' | 'debtHandled' | 'satisfaction', duration: number): void {
    const startValue = 0;
    const endValue = this[property].target;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      this[property].current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }

  // --- Utility Methods ---
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --- Contact Methods ---
  openContactModal(): void {
    // This can be used to open a contact modal if needed
    console.log('Opening contact modal...');
  }

  callPhone(): void {
    window.open('tel:+1234567890', '_self');
  }
}
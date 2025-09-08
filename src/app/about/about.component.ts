import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  specialties: string[];
  experience: string;
}

interface Achievement {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
  color: string;
}

interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('statsCounter', { static: false }) statsCounter!: ElementRef;

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Senior Partner & Debt Resolution Expert',
      description: 'Leading debt settlement specialist with extensive experience in complex financial negotiations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      specialties: ['Debt Settlement', 'Financial Law', 'Creditor Negotiations', 'Legal Strategy'],
      experience: '15+ Years'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Legal Advocate & Client Relations',
      description: 'Passionate advocate focused on protecting client rights and ensuring fair debt resolution.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      specialties: ['Client Advocacy', 'Legal Representation', 'Case Management', 'Dispute Resolution'],
      experience: '12+ Years'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Financial Analyst & Strategy Director',
      description: 'Expert in financial analysis and developing personalized debt resolution strategies.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      specialties: ['Financial Analysis', 'Strategy Development', 'Risk Assessment', 'Portfolio Management'],
      experience: '10+ Years'
    }
  ];

  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Cases Resolved',
      value: '5000+',
      description: 'Successfully resolved debt cases',
      icon: 'check_circle',
      color: 'emerald'
    },
    {
      id: 2,
      title: 'Debt Settled',
      value: '₹500Cr+',
      description: 'Total debt amount settled',
      icon: 'account_balance',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Client Satisfaction',
      value: '98%',
      description: 'Happy clients who achieved freedom',
      icon: 'favorite',
      color: 'rose'
    },
    {
      id: 4,
      title: 'Years of Excellence',
      value: '15+',
      description: 'Years serving the community',
      icon: 'military_tech',
      color: 'amber'
    }
  ];

  coreValues: CoreValue[] = [
    {
      id: 1,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in every action and interaction.',
      icon: 'gavel',
      color: 'blue',
      details: ['Transparent Communication', 'Honest Assessments', 'Ethical Practices', 'Client Trust']
    },
    {
      id: 2,
      title: 'Compassion',
      description: 'Approaching every client\'s situation with empathy and understanding.',
      icon: 'favorite',
      color: 'rose',
      details: ['Empathetic Approach', 'Personal Support', 'Emotional Guidance', 'Care Beyond Legal']
    },
    {
      id: 3,
      title: 'Innovation',
      description: 'Continuously seeking new and effective strategies for debt resolution.',
      icon: 'lightbulb',
      color: 'amber',
      details: ['Creative Solutions', 'Technology Integration', 'Process Improvement', 'Future-Ready Approach']
    },
    {
      id: 4,
      title: 'Excellence',
      description: 'Delivering outstanding results through expertise and dedication.',
      icon: 'star',
      color: 'emerald',
      details: ['Quality Service', 'Expert Knowledge', 'Continuous Learning', 'Best Practices']
    }
  ];

  currentYear = new Date().getFullYear();
  isStatsVisible = false;

  ngOnInit(): void {
    // Initialize any required data or animations
  }

  ngAfterViewInit(): void {
    // Set up intersection observer for stats animation
    this.setupStatsObserver();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  private setupStatsObserver(): void {
    if (this.statsCounter) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.isStatsVisible) {
              this.isStatsVisible = true;
              this.animateStats();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(this.statsCounter.nativeElement);
    }
  }

  private animateStats(): void {
    // Add stats animation logic here
    console.log('Animating stats...');
  }

  onContactUs(): void {
    // Handle contact action
    console.log('Contact us clicked');
  }

  onLearnMore(): void {
    // Handle learn more action
    console.log('Learn more clicked');
  }

  onViewServices(): void {
    // Handle view services action
    console.log('View services clicked');
  }
}
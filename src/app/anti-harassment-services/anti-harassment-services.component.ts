import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

interface LegalService {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string; // Added missing color property
  highlights: string[]; // Added missing highlights property
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  publishDate: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-anti-harassment-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './anti-harassment-services.component.html',
  styleUrl: './anti-harassment-services.component.scss'
})
export class AntiHarassmentServicesComponent implements OnInit, OnDestroy {

  // Stats data
  stats: Stat[] = [
    { value: '500+', label: 'Cases Won' },
    { value: '98%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' },
    { value: '100%', label: 'Confidential' }
  ];

  // Harassment types for ticker
  harassmentTypes: string[] = [
    'Workplace Harassment',
    'Cyber Bullying',
    'Financial Harassment',
    'Sexual Harassment',
    'Discrimination',
    'Stalking',
    'Defamation',
    'Privacy Violation'
  ];

  // Legal services data
  legalServices: LegalService[] = [
    {
      id: 1,
      title: 'Workplace Harassment Protection',
      description: 'Legal representation and advocacy for workplace harassment cases with comprehensive protection strategies.',
      icon: 'work_outline',
      color: 'navy', // Added color
      features: ['Sexual Harassment Cases', 'Discrimination Protection', 'Hostile Work Environment', 'Legal Documentation'],
      highlights: ['Expert Legal Team', 'Confidential Consultation', 'Proven Track Record', 'Quick Response'] // Added highlights
    },
    {
      id: 2,
      title: 'Cyber Harassment Defense',
      description: 'Specialized legal services for online harassment, cyberbullying, and digital privacy violations.',
      icon: 'security',
      color: 'gold', // Added color
      features: ['Online Stalking Cases', 'Privacy Violations', 'Defamation Claims', 'Digital Evidence Collection'],
      highlights: ['Digital Forensics', 'Privacy Protection', 'Evidence Collection', 'Legal Documentation'] // Added highlights
    },
    {
      id: 3,
      title: 'Financial Harassment Relief',
      description: 'Protection against debt collection harassment and abusive financial practices by creditors.',
      icon: 'account_balance',
      color: 'royal', // Added color
      features: ['Creditor Harassment', 'Collection Agency Abuse', 'Privacy Rights', 'Legal Remedies'],
      highlights: ['Debt Protection', 'Creditor Negotiations', 'Legal Shield', 'Financial Rights'] // Added highlights
    },
    {
      id: 4,
      title: 'Legal Advocacy & Representation',
      description: 'Expert legal representation in courts with experienced advocates specializing in harassment law.',
      icon: 'gavel',
      color: 'emerald', // Added color
      features: ['Court Representation', 'Legal Strategy', 'Evidence Preparation', 'Settlement Negotiations'],
      highlights: ['Court Advocacy', 'Legal Strategy', 'Case Preparation', 'Settlement Success'] // Added highlights
    }
  ];

  // Blog posts data
  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Your Rights Against Workplace Harassment',
      description: 'Comprehensive guide to recognizing workplace harassment and the legal remedies available to protect your rights.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      category: 'Workplace Rights',
      author: 'Legal Expert',
      readTime: '7 min read',
      publishDate: 'March 18, 2024'
    },
    {
      id: 2,
      title: 'Cyber Harassment: Legal Solutions in the Digital Age',
      description: 'How to combat online harassment, protect your digital privacy, and seek legal remedies for cyber crimes.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
      category: 'Cyber Law',
      author: 'Digital Rights Advocate',
      readTime: '6 min read',
      publishDate: 'March 15, 2024'
    },
    {
      id: 3,
      title: 'Financial Harassment: Know Your Protection Rights',
      description: 'Understanding your rights against creditor harassment and how legal intervention can provide relief.',
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=500&h=300&fit=crop',
      category: 'Financial Rights',
      author: 'Financial Law Expert',
      readTime: '5 min read',
      publishDate: 'March 12, 2024'
    }
  ];

  ngOnInit(): void {
    // Initialize any animations or observers here
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  // Method handlers
  onGetLegalHelp(): void {
    // Handle getting legal help action
    console.log('Get legal help clicked');
    // You can add navigation logic here
  }

  onContactAdvocates(): void {
    // Handle contact advocates action
    console.log('Contact advocates clicked');
    // You can add navigation logic here
  }

  onReadMore(postId: number): void {
    // Navigate to blog post detail or handle read more action
    console.log('Read more clicked for post:', postId);
    // You can add navigation logic here
  }
}
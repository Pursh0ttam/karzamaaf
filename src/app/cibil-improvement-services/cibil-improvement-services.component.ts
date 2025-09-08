import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

interface CibilService {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
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

@Component({
  selector: 'app-cibil-improvement-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './cibil-improvement-services.component.html',
  styleUrl: './cibil-improvement-services.component.scss' // Changed from .css to .scss
})
export class CibilImprovementServicesComponent implements OnInit, OnDestroy {

  legalServices: CibilService[] = [
    {
      id: 1,
      title: 'Credit Score Analysis',
      description: 'Comprehensive analysis of your credit report and score improvement strategies.',
      icon: 'trending_up',
      features: ['Credit Report Review', 'Score Analysis', 'Improvement Plan', 'Progress Tracking']
    },
    {
      id: 2,
      title: 'Dispute Resolution',
      description: 'Legal assistance in disputing incorrect entries and negative marks on your credit report.',
      icon: 'gavel',
      features: ['Error Disputes', 'Legal Representation', 'Documentation Support', 'Follow-up Services']
    },
    {
      id: 3,
      title: 'Credit Repair Services',
      description: 'Expert services to repair and improve your credit score through legal methods.',
      icon: 'build',
      features: ['Credit Repair', 'Score Enhancement', 'Payment History Fix', 'Credit Utilization Optimization']
    },
    {
      id: 4,
      title: 'Financial Counseling',
      description: 'Professional financial counseling to maintain and improve your credit health.',
      icon: 'account_balance',
      features: ['Financial Planning', 'Budget Management', 'Debt Counseling', 'Credit Education']
    }
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Complete Guide to CIBIL Score Improvement',
      description: 'Step-by-step guide to understanding and improving your CIBIL score with proven strategies.',
      image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=500&h=300&fit=crop',
      category: 'Credit Score',
      author: 'Financial Expert',
      readTime: '8 min read',
      publishDate: 'March 20, 2024'
    },
    {
      id: 2,
      title: 'Common CIBIL Errors and How to Fix Them',
      description: 'Identify common errors in your credit report and learn the legal process to dispute them.',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=500&h=300&fit=crop',
      category: 'Credit Repair',
      author: 'Legal Advisor',
      readTime: '6 min read',
      publishDate: 'March 18, 2024'
    },
    {
      id: 3,
      title: 'Building Credit History from Scratch',
      description: 'Essential strategies for building a strong credit history and maintaining excellent scores.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
      category: 'Credit Building',
      author: 'Credit Specialist',
      readTime: '7 min read',
      publishDate: 'March 15, 2024'
    }
  ];

  ngOnInit(): void {
    // Initialize any animations or observers here
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  onReadMore(postId: number): void {
    // Navigate to blog post detail or handle read more action
    console.log('Read more clicked for post:', postId);
  }

  onGetHelp(): void {
    // Handle getting help action
    console.log('Get help clicked');
  }

  onContactExperts(): void {
    // Handle contact experts action
    console.log('Contact experts clicked');
  }
}
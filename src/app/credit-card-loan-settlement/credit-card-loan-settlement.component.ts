import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-credit-card-loan-settlement',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './credit-card-loan-settlement.component.html',
  styleUrl: './credit-card-loan-settlement.component.scss'
})
export class CreditCardLoanSettlementComponent implements OnInit, OnDestroy {
  
  // Benefits data
  benefits = [
    {
      icon: 'savings',
      title: 'Debt Reduction',
      description: 'Settle your debt for 40-60% less than the original amount',
      percentage: '60%',
      color: 'green'
    },
    {
      icon: 'schedule',
      title: 'Fast Resolution',
      description: 'Complete settlement process in 90-180 days',
      percentage: '180',
      color: 'blue'
    },
    {
      icon: 'shield',
      title: 'Legal Protection',
      description: 'Professional negotiation with legal backing',
      percentage: '100%',
      color: 'purple'
    },
    {
      icon: 'trending_up',
      title: 'Credit Recovery',
      description: 'Structured plan to rebuild your credit score',
      percentage: '95%',
      color: 'orange'
    }
  ];

  // Blog posts data
  blogPosts = [
    {
      id: 1,
      title: 'Credit Card Settlement vs Bankruptcy: Which is Right for You?',
      description: 'Understand the key differences between credit card settlement and bankruptcy to make the best financial decision.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop',
      category: 'Legal Advice',
      readTime: '6 min read',
      publishDate: 'March 20, 2024'
    },
    {
      id: 2,
      title: 'How to Negotiate Credit Card Debt Settlement Successfully',
      description: 'Expert strategies and tips for negotiating the best possible settlement terms with credit card companies.',
      image: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=500&h=300&fit=crop',
      category: 'Settlement Strategy',
      readTime: '8 min read',
      publishDate: 'March 15, 2024'
    },
    {
      id: 3,
      title: 'Tax Implications of Credit Card Debt Settlement',
      description: 'What you need to know about tax consequences when settling credit card debt and how to prepare.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
      category: 'Tax Planning',
      readTime: '5 min read',
      publishDate: 'March 10, 2024'
    }
  ];

  // Statistics
  stats = [
    { label: 'Clients Helped', value: '15,000+' },
    { label: 'Debt Settled', value: '₹2.5B+' },
    { label: 'Success Rate', value: '94%' },
    { label: 'Average Savings', value: '58%' }
  ];

  ngOnInit(): void {
    // Initialize any animations or observers here
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  onReadMore(postId: number): void {
    console.log('Read more clicked for post:', postId);
    // Navigate to blog post detail
  }

  onStartSettlement(): void {
    console.log('Start settlement clicked');
    // Navigate to settlement form or contact page
  }

  onTalkToExpert(): void {
    console.log('Talk to expert clicked');
    // Open contact modal or navigate to consultation page
  }
}
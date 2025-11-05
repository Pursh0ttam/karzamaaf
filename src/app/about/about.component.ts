import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

interface Testimonial {
  id: number;
  name: string;
  case: string;
  text: string;
  rating: number;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Gupta',
      case: 'Credit Card Debt Settlement',
      text: 'KarzaMaaf transformed my life when I was drowning in ₹8 lakh credit card debt. Their expert team negotiated with banks and reduced my debt by 60%. Today, I am debt-free and financially stable. Their constitutional approach to justice gave me hope when I had none.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sunita Devi',
      case: 'Personal Loan Recovery',
      text: 'As a single mother facing harassment from recovery agents, KarzaMaaf stood as my shield. They protected my fundamental rights and negotiated a fair settlement plan. Their compassionate approach and legal expertise saved my family from financial ruin.',
      rating: 5
    },
    {
      id: 3,
      name: 'Vikram Singh',
      case: 'Business Debt Resolution',
      text: 'When my small business faced closure due to mounting debts, KarzaMaaf provided the legal framework for recovery. They helped restructure ₹15 lakh in business loans and gave me a second chance to rebuild. Their integrity and dedication are unmatched.',
      rating: 5
    },
    {
      id: 4,
      name: 'Meera Sharma',
      case: 'Home Loan Settlement',
      text: 'Facing foreclosure on our family home was devastating. KarzaMaaf fought for our constitutional right to shelter and negotiated with the bank to prevent seizure. They saved our home and our dignity. Forever grateful for their service.',
      rating: 5
    }
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Your Constitutional Rights in Debt Recovery',
      excerpt: 'Every Indian citizen has fundamental rights that protect them from harassment during debt recovery. Learn how Article 21 of the Constitution safeguards your dignity and personal liberty.',
      author: 'Adv. Rajesh Kumar',
      date: 'September 10, 2024',
      readTime: 8,
      category: 'Constitutional Law',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'RBI Guidelines on Fair Debt Collection Practices',
      excerpt: 'The Reserve Bank of India has issued comprehensive guidelines to protect borrowers from aggressive collection practices. Understand your rights and how to report violations.',
      author: 'Adv. Priya Sharma',
      date: 'September 8, 2024',
      readTime: 6,
      category: 'Banking Law',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Supreme Court Landmark Judgments on Debt Settlement',
      excerpt: 'Recent Supreme Court rulings have strengthened borrower protection. Explore key judgments that have shaped modern debt settlement practices in India.',
      author: 'Adv. Amit Patel',
      date: 'September 5, 2024',
      readTime: 10,
      category: 'Case Law',
      image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Insolvency and Bankruptcy Code: A Borrower\'s Guide',
      excerpt: 'The IBC 2016 provides a structured framework for debt resolution. Learn how individual insolvency provisions can offer relief to overwhelmed borrowers.',
      author: 'Adv. Neha Agarwal',
      date: 'September 2, 2024',
      readTime: 12,
      category: 'Insolvency Law',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Digital Lending Regulations and Borrower Protection',
      excerpt: 'With the rise of fintech lending, new regulations ensure borrower protection in digital lending. Stay informed about your rights in the digital lending ecosystem.',
      author: 'Adv. Rohit Verma',
      date: 'August 30, 2024',
      readTime: 7,
      category: 'Fintech Law',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Women\'s Rights in Financial Distress Situations',
      excerpt: 'Special legal protections exist for women facing financial harassment. Understand the legal remedies available under various women protection acts.',
      author: 'Adv. Kavita Singh',
      date: 'August 28, 2024',
      readTime: 9,
      category: 'Women\'s Rights',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop'
    }
  ];

  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    // Initialize any required data or animations
  }

  ngAfterViewInit(): void {
    // Set up any view-related initialization
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  onContactUs(): void {
    // Handle contact action - could navigate to contact page or open modal
    console.log('Contact us clicked');
    // Example: this.router.navigate(['/contact']);
  }

  onViewServices(): void {
    // Handle view services action
    console.log('View services clicked');
    // Example: this.router.navigate(['/services']);
  }
}
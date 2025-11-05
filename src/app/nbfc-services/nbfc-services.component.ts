import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

interface NBFCService {
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
  readTime: string;
  publishDate: string;
  tags: string[];
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-nbfc-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './nbfc-services.component.html',
  styleUrl: './nbfc-services.component.css'
})
export class NbfcServicesComponent implements OnInit, OnDestroy {

  nbfcServices: NBFCService[] = [
    {
      id: 1,
      title: 'RBI Compliance & Registration',
      description: 'Complete assistance with RBI registration, license renewal, and ongoing compliance monitoring for NBFCs.',
      icon: 'account_balance',
      features: [
        'RBI License Application & Renewal',
        'Compliance Audit & Assessment',
        'Regulatory Filing Support',
        'Policy Documentation',
        'Board Resolution Drafting'
      ]
    },
    {
      id: 2,
      title: 'Digital Lending Legal Framework',
      description: 'Navigate digital lending regulations with expert legal guidance on app-based lending and fintech compliance.',
      icon: 'smartphone',
      features: [
        'Digital Lending Guidelines Compliance',
        'App Store Policy Adherence',
        'Data Privacy & Security Laws',
        'Customer Protection Measures',
        'Technology Risk Management'
      ]
    },
    {
      id: 3,
      title: 'Corporate Governance & Risk Management',
      description: 'Establish robust governance frameworks and risk management systems as per RBI guidelines.',
      icon: 'security',
      features: [
        'Board Governance Structure',
        'Risk Management Framework',
        'Internal Audit Systems',
        'Compliance Monitoring',
        'Regulatory Reporting'
      ]
    },
    {
      id: 4,
      title: 'Debt Recovery & Legal Actions',
      description: 'Professional debt recovery services and legal representation for NBFCs in recovery proceedings.',
      icon: 'gavel',
      features: [
        'Debt Recovery Tribunal (DRT) Cases',
        'SARFAESI Act Proceedings',
        'Negotiation & Settlement',
        'Asset Reconstruction',
        'Legal Notice Drafting'
      ]
    },
    {
      id: 5,
      title: 'Merger & Acquisition Support',
      description: 'Legal assistance for NBFC mergers, acquisitions, and corporate restructuring transactions.',
      icon: 'business_center',
      features: [
        'Due Diligence Support',
        'Transaction Documentation',
        'Regulatory Approvals',
        'Valuation Assistance',
        'Post-Merger Integration'
      ]
    },
    {
      id: 6,
      title: 'Litigation & Dispute Resolution',
      description: 'Expert representation in NBFC-related litigation, regulatory disputes, and arbitration proceedings.',
      icon: 'balance',
      features: [
        'High Court & Supreme Court Cases',
        'Regulatory Dispute Resolution',
        'Commercial Arbitration',
        'Consumer Court Matters',
        'Writ Petition Filing'
      ]
    }
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'RBI\'s New Digital Lending Guidelines: What NBFCs Need to Know',
      description: 'Comprehensive analysis of RBI\'s latest digital lending guidelines and their impact on NBFC operations, compliance requirements, and business models.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      category: 'RBI Guidelines',
      readTime: '8 min read',
      publishDate: 'September 12, 2024',
      tags: ['RBI', 'Digital Lending', 'Compliance', 'Fintech']
    },
    {
      id: 2,
      title: 'NBFC Licensing Process: A Step-by-Step Legal Guide',
      description: 'Complete walkthrough of the NBFC licensing process, documentation requirements, and regulatory compliance for new financial institutions.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop',
      category: 'Licensing',
      readTime: '10 min read',
      publishDate: 'September 8, 2024',
      tags: ['NBFC License', 'Registration', 'Legal Process', 'Documentation']
    },
    {
      id: 3,
      title: 'Corporate Governance Framework for NBFCs: Best Practices',
      description: 'Essential corporate governance practices for NBFCs, board composition requirements, and risk management frameworks as per RBI norms.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
      category: 'Governance',
      readTime: '7 min read',
      publishDate: 'September 5, 2024',
      tags: ['Corporate Governance', 'Risk Management', 'Board Structure', 'Compliance']
    },
    {
      id: 4,
      title: 'SARFAESI Act and NBFCs: Recovery Rights and Procedures',
      description: 'Understanding NBFC rights under SARFAESI Act, asset reconstruction procedures, and legal remedies for debt recovery.',
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=500&h=300&fit=crop',
      category: 'Debt Recovery',
      readTime: '9 min read',
      publishDate: 'September 1, 2024',
      tags: ['SARFAESI', 'Debt Recovery', 'Asset Reconstruction', 'Legal Rights']
    },
    {
      id: 5,
      title: 'Fintech Partnerships: Legal Framework for NBFC Collaborations',
      description: 'Legal considerations for NBFC-fintech partnerships, regulatory compliance, and risk management in collaborative lending models.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
      category: 'Fintech',
      readTime: '6 min read',
      publishDate: 'August 28, 2024',
      tags: ['Fintech', 'Partnerships', 'Collaboration', 'Legal Framework']
    },
    {
      id: 6,
      title: 'Data Protection Laws for NBFCs: Privacy and Security Compliance',
      description: 'Comprehensive guide to data protection requirements for NBFCs, customer privacy laws, and cybersecurity compliance frameworks.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop',
      category: 'Data Protection',
      readTime: '8 min read',
      publishDate: 'August 25, 2024',
      tags: ['Data Protection', 'Privacy Laws', 'Cybersecurity', 'Compliance']
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Mehta',
      position: 'CEO',
      company: 'FinCorp NBFC Ltd.',
      text: 'KarzaMaaf\'s legal expertise helped us navigate complex RBI regulations seamlessly. Their team ensured our NBFC license renewal was completed without any compliance issues. Highly recommended for any NBFC legal requirements.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Compliance Head',
      company: 'Digital Finance Solutions',
      text: 'The digital lending compliance guidance provided by KarzaMaaf was exceptional. They helped us align our app-based lending platform with all RBI guidelines, saving us from potential regulatory penalties.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Kumar',
      position: 'Managing Director',
      company: 'MicroCredit NBFC',
      text: 'When we faced a complex debt recovery case, KarzaMaaf\'s litigation team provided outstanding representation. Their expertise in SARFAESI proceedings helped us recover significant amounts efficiently.',
      rating: 5
    },
    {
      id: 4,
      name: 'Sunita Agarwal',
      position: 'Legal Head',
      company: 'TechFin NBFC',
      text: 'KarzaMaaf\'s support during our merger process was invaluable. They handled all regulatory approvals and documentation with precision, ensuring a smooth transaction completion within the stipulated timeline.',
      rating: 5
    }
  ];

  ngOnInit(): void {
    // Initialize any animations or observers here
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  onGetConsultation(): void {
    // Navigate to consultation booking or contact form
    console.log('Get consultation clicked');
  }

  onViewServices(): void {
    // Navigate to detailed services page
    console.log('View services clicked');
  }

  onLearnMore(serviceId: number): void {
    // Navigate to specific service detail page
    console.log('Learn more clicked for service:', serviceId);
  }

  onReadMore(postId: number): void {
    // Navigate to blog post detail or handle read more action
    console.log('Read more clicked for post:', postId);
  }
}
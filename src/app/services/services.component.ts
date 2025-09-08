import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Personal Loan Settlement',
      description: 'Resolve outstanding personal loans with expert negotiation and support.',
      icon: 'account_balance',
      link: '/personal-loan-settlement'
    },
    {
      title: "NBFC's",
      description: 'Specialized solutions for loans and disputes with Non-Banking Financial Companies.',
      icon: 'business',
      link: '/nbfc-services'
    },
    {
      title: 'Litigation',
      description: 'Legal representation and advice for loan-related court cases and disputes.',
      icon: 'gavel',
      link: '/litigation'
    },
    {
      title: 'Credit Card Loan Settlement',
      description: 'Help with settling credit card dues and reducing financial burden.',
      icon: 'credit_card',
      link: '/credit-card-loan-settlement'
    },
    {
      title: 'Anti-Harassment Services',
      description: 'Protection from unlawful recovery practices and harassment by lenders.',
      icon: 'security',
      link: '/anti-harassment-services'
    },
    {
      title: 'CIBIL Improvement Services',
      description: 'Boost your credit score and financial credibility with expert guidance.',
      icon: 'trending_up',
      link: '/cibil-improvement-services'
    }
  ];
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  services = [
    {
      title: 'Personal Loan Settlement',
    //   description: 'Resolve outstanding personal loans with expert negotiation and support.'
    },
    {
      title: "NBFC's",
    //   description: 'Specialized solutions for loans and disputes with Non-Banking Financial Companies.'
    },
    {
      title: 'Litigation',
    //   description: 'Legal representation and advice for loan-related court cases and disputes.'
    },
    {
      title: 'Credit Card Loan Settlement',
    //   description: 'Help with settling credit card dues and reducing financial burden.'
    },
    {
      title: 'Anti-Harassment Services',
    //   description: 'Protection from unlawful recovery practices and harassment by lenders.'
    },
    {
      title: 'CIBIL Improvement Services',
    //   description: 'Boost your credit score and financial credibility with expert guidance.'
    }
  ];
}

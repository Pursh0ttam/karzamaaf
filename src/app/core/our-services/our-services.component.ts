import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  services = [
    {
      title: 'Personal Loan Settlement',
      route: '/personal-loan-settlement'
    },
    {
      title: "NBFC's",
      route: '/nbfc-services'
    },
    {
      title: 'Litigation',
      route: '/litigation'
    },
    {
      title: 'Credit Card Loan Settlement',
      route: '/credit-card-loan-settlement'
    },
    {
      title: 'Anti-Harassment Services',
      route: '/anti-harassment-services'
    },
    {
      title: 'CIBIL Improvement Services',
      route: '/cibil-improvement-services'
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-personal-loan-settlement',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SharedModule],
  templateUrl: './personal-loan-settlement.component.html',
  styleUrls: ['./personal-loan-settlement.component.scss']
})
export class PersonalLoanSettlementComponent implements OnInit {

  // Calculator Properties
  loanAmount: number = 500000;
  monthlyEMI: number = 15000;
  monthsBehind: number = 6;
  
  settlementAmount: number = 0;
  savingsAmount: number = 0;
  savingsPercentage: number = 0;

  // FAQ State
  openFaq: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.calculateSavings();
  }

  // Calculator Methods
  calculateSavings(): void {
    if (!this.loanAmount || this.loanAmount <= 0) {
      this.resetCalculatorResults();
      return;
    }

    // Settlement percentage based on months behind
    let settlementPercentage = 0.45; // Default 45%
    
    switch(this.monthsBehind) {
      case 3:
        settlementPercentage = 0.55; // 55% of original (45% savings)
        break;
      case 6:
        settlementPercentage = 0.45; // 45% of original (55% savings)
        break;
      case 12:
        settlementPercentage = 0.40; // 40% of original (60% savings)
        break;
      case 24:
        settlementPercentage = 0.35; // 35% of original (65% savings)
        break;
    }

    this.settlementAmount = Math.round(this.loanAmount * settlementPercentage);
    this.savingsAmount = this.loanAmount - this.settlementAmount;
    this.savingsPercentage = Math.round(((this.savingsAmount / this.loanAmount) * 100));
  }

  private resetCalculatorResults(): void {
    this.settlementAmount = 0;
    this.savingsAmount = 0;
    this.savingsPercentage = 0;
  }

  startConsultation(): void {
    // Navigate to contact with pre-filled data
    const consultationData = {
      loanAmount: this.loanAmount,
      monthlyEMI: this.monthlyEMI,
      monthsBehind: this.monthsBehind,
      estimatedSavings: this.savingsAmount
    };
    
    // Store in session storage for contact form
    sessionStorage.setItem('consultationData', JSON.stringify(consultationData));
    
    // Navigate to contact
    // this.router.navigate(['/contact']);
    console.log('Starting consultation with data:', consultationData);
  }

  // FAQ Methods
  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }

  // Utility Methods
  scrollToCalculator(): void {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Navigation Methods
  navigateToContact(): void {
    // Add navigation logic here
    console.log('Navigating to contact page');
  }

  callPhone(): void {
    window.open('tel:+1234567890', '_self');
  }
}
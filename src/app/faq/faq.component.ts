import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: FaqItem[] = [
    { question: 'Will this affect my credit score?', answer: 'Initially, the settlement process can negatively impact a credit score. However, successfully settling debts is a major step toward rebuilding your credit for the long term.', isOpen: false },
    { question: 'How long does the process take?', answer: 'The timeline varies depending on the creditor and the amount of debt, but many cases are resolved within 6 to 12 months.', isOpen: false },
    { question: 'What are your fees?', answer: 'We work on a contingency basis, meaning our fee is a percentage of the debt we save you. You pay nothing until we successfully settle your debt.', isOpen: false },
    { question: 'Is the loan settlement process legal?', answer: 'Yes, absolutely. We ensure that all settlements are documented with legally binding agreements between you and the creditor.', isOpen: false },
    { question: 'Who is eligible for loan settlement?', answer: 'Anyone facing financial hardship and unable to pay their debts may be eligible. Contact us for a free evaluation.', isOpen: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

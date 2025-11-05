import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
  category: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  selectedCategory = 'all';
  
  categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'personal-loan', name: 'Personal Loan Settlement' },
    { id: 'credit-card', name: 'Credit Card Settlement' },
    { id: 'nbfc', name: 'NBFC Services' },
    { id: 'cibil', name: 'CIBIL Improvement' },
    { id: 'legal', name: 'Legal Services' },
    { id: 'harassment', name: 'Anti-Harassment' }
  ];

  faqs: FaqItem[] = [
    // General Questions
    { 
      question: 'What is KarzaMaaf and how can you help me?', 
      answer: 'KarzaMaaf is a leading debt settlement and legal services company that helps individuals resolve their financial difficulties. We specialize in personal loan settlements, credit card settlements, NBFC negotiations, CIBIL score improvement, and legal protection against harassment by recovery agents.',
      isOpen: false,
      category: 'general'
    },
    { 
      question: 'Is debt settlement legal in India?', 
      answer: 'Yes, debt settlement is completely legal in India. We ensure all settlements are documented with legally binding agreements between you and the creditor, following RBI guidelines and banking regulations.',
      isOpen: false,
      category: 'general'
    },
    { 
      question: 'How much can I save through debt settlement?', 
      answer: 'Savings vary depending on your financial situation and debt amount. Typically, our clients save 40-70% of their outstanding debt amount. We provide a free consultation to assess your specific case.',
      isOpen: false,
      category: 'general'
    },
    { 
      question: 'What are your fees and charges?', 
      answer: 'We work on a success-based model. Our fee is a percentage of the amount we save you, typically 15-25% of the settled amount. You pay nothing until we successfully settle your debt.',
      isOpen: false,
      category: 'general'
    },

    // Personal Loan Settlement
    { 
      question: 'Can personal loans be settled for less than the full amount?', 
      answer: 'Yes, personal loans can often be settled for 30-60% of the outstanding amount, depending on your financial hardship and the lender\'s policies. We negotiate on your behalf to achieve the best possible settlement.',
      isOpen: false,
      category: 'personal-loan'
    },
    { 
      question: 'Will personal loan settlement affect my CIBIL score?', 
      answer: 'Initially, settlement may impact your CIBIL score. However, it\'s better than defaulting completely. We also provide CIBIL improvement services to help rebuild your credit score after settlement.',
      isOpen: false,
      category: 'personal-loan'
    },
    { 
      question: 'How long does personal loan settlement take?', 
      answer: 'The process typically takes 3-8 months, depending on the lender and complexity of your case. We work diligently to expedite the process while ensuring the best possible outcome.',
      isOpen: false,
      category: 'personal-loan'
    },

    // Credit Card Settlement
    { 
      question: 'Can credit card debt be settled?', 
      answer: 'Yes, credit card debts can be settled for significantly less than the outstanding amount. We have successfully settled credit card debts for 25-50% of the original amount.',
      isOpen: false,
      category: 'credit-card'
    },
    { 
      question: 'What happens to my credit card after settlement?', 
      answer: 'The credit card will be closed after settlement. However, you can apply for new credit cards after improving your CIBIL score, which we can help you with through our credit improvement services.',
      isOpen: false,
      category: 'credit-card'
    },
    { 
      question: 'Can I settle multiple credit cards at once?', 
      answer: 'Yes, we can help you settle multiple credit card debts simultaneously. This often results in better overall savings and a more streamlined process.',
      isOpen: false,
      category: 'credit-card'
    },

    // NBFC Services
    { 
      question: 'Do you handle NBFC loan settlements?', 
      answer: 'Yes, we specialize in NBFC loan settlements including loans from Bajaj Finserv, Tata Capital, Mahindra Finance, and other NBFCs. Our success rate with NBFC settlements is over 90%.',
      isOpen: false,
      category: 'nbfc'
    },
    { 
      question: 'Are NBFC settlements different from bank settlements?', 
      answer: 'NBFCs often have more flexible settlement policies compared to banks. We leverage our relationships with NBFCs to negotiate better settlement terms for our clients.',
      isOpen: false,
      category: 'nbfc'
    },

    // CIBIL Improvement
    { 
      question: 'How can you improve my CIBIL score?', 
      answer: 'We help improve CIBIL scores through dispute resolution, error corrections, strategic debt management, and providing guidance on credit rebuilding strategies. Most clients see improvement within 3-6 months.',
      isOpen: false,
      category: 'cibil'
    },
    { 
      question: 'What is the minimum CIBIL score you can achieve?', 
      answer: 'While results vary, we typically help clients achieve scores between 650-750. The improvement depends on your current score, credit history, and adherence to our recommendations.',
      isOpen: false,
      category: 'cibil'
    },
    { 
      question: 'How long does CIBIL score improvement take?', 
      answer: 'CIBIL score improvement typically takes 3-12 months depending on the issues in your credit report. Simple error corrections can show results in 30-45 days.',
      isOpen: false,
      category: 'cibil'
    },

    // Legal Services
    { 
      question: 'Do you provide legal representation in court?', 
      answer: 'Yes, we have experienced lawyers who can represent you in debt-related legal matters, including cases filed by banks, NBFCs, or recovery agencies.',
      isOpen: false,
      category: 'legal'
    },
    { 
      question: 'What if I receive a legal notice from my lender?', 
      answer: 'Don\'t panic. Contact us immediately. We have handled thousands of legal notices and can guide you through the proper response and resolution process.',
      isOpen: false,
      category: 'legal'
    },

    // Anti-Harassment
    { 
      question: 'Can you stop harassment by recovery agents?', 
      answer: 'Yes, we can legally stop harassment by recovery agents. We send legal notices, file complaints with appropriate authorities, and take necessary legal action to protect your rights.',
      isOpen: false,
      category: 'harassment'
    },
    { 
      question: 'What constitutes harassment by recovery agents?', 
      answer: 'Harassment includes calling at odd hours, using abusive language, threatening family members, visiting your workplace, or any form of mental torture. All these practices are illegal under RBI guidelines.',
      isOpen: false,
      category: 'harassment'
    },
    { 
      question: 'Is there any cost for anti-harassment services?', 
      answer: 'Our basic anti-harassment consultation is free. If legal action is required, we charge a nominal fee. We believe everyone deserves to be treated with dignity and respect.',
      isOpen: false,
      category: 'harassment'
    },

    // Process and Timeline
    { 
      question: 'What documents do I need to provide?', 
      answer: 'You\'ll need loan agreements, bank statements, salary slips, ID proof, and any correspondence from lenders. We\'ll guide you through the complete documentation process.',
      isOpen: false,
      category: 'general'
    },
    { 
      question: 'Can I continue paying EMIs during the settlement process?', 
      answer: 'We typically advise stopping EMI payments during settlement negotiations as it demonstrates financial hardship. However, each case is unique, and we\'ll provide personalized guidance.',
      isOpen: false,
      category: 'general'
    },
    { 
      question: 'What happens after successful settlement?', 
      answer: 'After settlement, you receive a No Dues Certificate from the lender. We also help you plan your financial recovery and credit score improvement for a better financial future.',
      isOpen: false,
      category: 'general'
    }
  ];

  getCategoryTitle(): string {
    if (this.selectedCategory === 'all') {
      return 'All Questions';
    }
    const category = this.categories.find(c => c.id === this.selectedCategory);
    return category ? category.name : 'Questions';
  }

  get filteredFaqs() {
    if (this.selectedCategory === 'all') {
      return this.faqs;
    }
    return this.faqs.filter(faq => faq.category === this.selectedCategory);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    // Close all open FAQs when switching categories
    this.faqs.forEach(faq => faq.isOpen = false);
  }

  toggleFaq(index: number) {
    const actualIndex = this.selectedCategory === 'all' 
      ? index 
      : this.faqs.findIndex(faq => faq === this.filteredFaqs[index]);
    
    this.faqs[actualIndex].isOpen = !this.faqs[actualIndex].isOpen;
  }
}

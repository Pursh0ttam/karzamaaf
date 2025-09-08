import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PersonalLoanSettlementComponent } from './personal-loan-settlement/personal-loan-settlement.component';
import { NbfcServicesComponent } from './nbfc-services/nbfc-services.component';
import { LitigationComponent } from './litigation/litigation.component';
import { CreditCardLoanSettlementComponent } from './credit-card-loan-settlement/credit-card-loan-settlement.component';
import { AntiHarassmentServicesComponent } from './anti-harassment-services/anti-harassment-services.component';
import { CibilImprovementServicesComponent } from './cibil-improvement-services/cibil-improvement-services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'personal-loan-settlement', component: PersonalLoanSettlementComponent },
  { path: 'nbfc-services', component: NbfcServicesComponent },
  { path: 'litigation', component: LitigationComponent },
  { path: 'credit-card-loan-settlement', component: CreditCardLoanSettlementComponent },
  { path: 'anti-harassment-services', component: AntiHarassmentServicesComponent },
  { path: 'cibil-improvement-services', component: CibilImprovementServicesComponent },
];

// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { SharedModule } from '../shared/shared.module';

// @Component({
//   selector: 'app-nbfc',
//   standalone: true,
//   imports: [CommonModule, RouterModule, SharedModule],
//   templateUrl: './nbfc.component.html',
//   styleUrl: './nbfc.component.scss'
// })
// export class NbfcComponent implements OnInit, OnDestroy {
  
//   // Blog posts data
//   blogPosts = [
//     {
//       id: 1,
//       title: 'NBFC Compliance: New Regulations & Legal Requirements',
//       description: 'Stay updated with the latest NBFC compliance regulations and how they impact your business operations.',
//       image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop',
//       category: 'Compliance',
//       readTime: '5 min read',
//       publishDate: 'March 15, 2024'
//     },
//     {
//       id: 2,
//       title: 'Digital Lending Laws: Protecting Your NBFC from Legal Risks',
//       description: 'Navigate the complex landscape of digital lending laws and protect your NBFC from regulatory penalties.',
//       image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
//       category: 'Digital Lending',
//       readTime: '7 min read',
//       publishDate: 'March 10, 2024'
//     },
//     {
//       id: 3,
//       title: 'RBI Guidelines for NBFCs: A Comprehensive Legal Guide',
//       description: 'Understand RBI guidelines for NBFCs and ensure your company remains compliant with all regulatory requirements.',
//       image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=500&h=300&fit=crop',
//       category: 'RBI Guidelines',
//       readTime: '6 min read',
//       publishDate: 'March 5, 2024'
//     }
//   ];

//   ngOnInit(): void {
//     // Initialize any animations or observers here
//   }

//   ngOnDestroy(): void {
//     // Cleanup if needed
//   }

//   onReadMore(postId: number): void {
//     // Navigate to blog post detail or handle read more action
//     console.log('Read more clicked for post:', postId);
//   }
// }
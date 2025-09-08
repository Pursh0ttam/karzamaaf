import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-litigation',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './litigation.component.html',
  styleUrl: './litigation.component.scss' // Corrected from .css to .scss
})
export class LitigationComponent implements OnInit, OnDestroy {
  
  // Properties for the countdown timer
  hours: string = '23';
  minutes: string = '59';
  seconds: string = '42';

  private timerId: any;

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed to prevent memory leaks
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private startTimer(): void {
    let duration = 24 * 60 * 60; // 24 hours in seconds

    this.timerId = setInterval(() => {
      duration--;

      if (duration < 0) {
        clearInterval(this.timerId);
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        return;
      }

      const h = Math.floor(duration / 3600);
      const m = Math.floor((duration % 3600) / 60);
      const s = Math.floor(duration % 60);

      // Pad with leading zeros if needed
      this.hours = h < 10 ? '0' + h : h.toString();
      this.minutes = m < 10 ? '0' + m : m.toString();
      this.seconds = s < 10 ? '0' + s : s.toString();

    }, 1000);
  }
}
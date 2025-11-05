import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() {
    this.initializeSecurityMeasures();
  }

  private initializeSecurityMeasures(): void {
    // Disable console in production
    if (window.location.hostname !== 'localhost') {
      this.disableConsole();
    }
    
    // Monitor for suspicious activity
    this.monitorSuspiciousActivity();
    
    // Prevent common attacks
    this.preventCommonAttacks();
  }

  private disableConsole(): void {
    // Override console methods in production
    const noop = () => {};
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
  }

  private monitorSuspiciousActivity(): void {
    // Monitor for rapid form submissions
    let formSubmissions = 0;
    const resetTime = 60000; // 1 minute

    setInterval(() => {
      formSubmissions = 0;
    }, resetTime);

    // Monitor for automated behavior
    document.addEventListener('click', () => {
      formSubmissions++;
      if (formSubmissions > 10) {
        this.handleSuspiciousActivity();
      }
    });
  }

  private preventCommonAttacks(): void {
    // Prevent iframe embedding
    if (window.top !== window.self) {
      window.top!.location = window.self.location;
    }

    // Clear clipboard on sensitive operations
    document.addEventListener('copy', (e) => {
      if (window.getSelection()?.toString().includes('@')) {
        e.preventDefault();
      }
    });
  }

  private handleSuspiciousActivity(): void {
    console.warn('Suspicious activity detected');
    // Could redirect to error page or show warning
  }

  // Validate input for XSS
  sanitizeInput(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<[^>]*>/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  // Check if user is using developer tools
  isDevToolsOpen(): boolean {
    const threshold = 160;
    return (
      window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold
    );
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  showDropdown = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openCallbackModal() {
    // Add your callback modal logic here
    console.log('Opening callback modal');
  }
}

import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'masTi-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isDropdownOpen = false;
  isMobileMenuOpen = false;

  // Toggles the dropdown menu visibility
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Toggles the mobile menu visibility
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Closes the dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;

    // If the click is outside the dropdown and button, close it
    if (!target.closest('.relative.ml-3')) {
      this.isDropdownOpen = false;
    }
  }
}

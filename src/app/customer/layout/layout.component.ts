import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'masTi-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {
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

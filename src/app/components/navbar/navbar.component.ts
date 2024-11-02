import { NgIf } from '@angular/common';
import { Component, HostListener, ViewContainerRef, Injector, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WishListComponent } from "../../customer/home/wish-list/wish-list.component";
import { AuthService } from '../../customer/services/auth.service';
import { ModalComponent } from "../modal/modal.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'masTi-navbar',
  standalone: true,
  imports: [NgIf, RouterModule, WishListComponent, ModalComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  signupForm!: FormGroup;
  isOpen: boolean;
  isLoggedIn: boolean;
  toggleWishlist() {
    this.isOpen = !this.isOpen;
  }

  constructor(
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required]]
    });
  }
  async toggleSidebar() {
    // Lazy-load the module and component
    const { CustomerModule } = await import('../../customer/customer.module');
    const { CartComponent } = await import('../../customer/home/cart/cart.component');
    // Register the module in the injector if needed
    const moduleRef = this.injector.get(CustomerModule);

    // Create the component and add it to the view
    const componentRef = this.viewContainerRef.createComponent(CartComponent, { injector: this.injector });

    // Optionally, interact with the component instance
    componentRef.instance.open = !componentRef.instance.open;
    // this.cartService.toggleSidebar.next(true);
  }
  isProfileDropdownOpen = false;
  isMobileMenuOpen = false;
  isCategoryDropdownOpen = false;
  isMobileCategoryDropdownOpen = false;

  // Toggle functions
  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    this.isCategoryDropdownOpen = false; // Close category dropdown if profile is opened
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleCategoryDropdown() {
    this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
    this.isProfileDropdownOpen = false; // Close profile dropdown if category is opened
  }

  toggleMobileCategoryDropdown() {
    this.isMobileCategoryDropdownOpen = !this.isMobileCategoryDropdownOpen;
  }

  selectCategory(category: string) {
    console.log(`Selected category: ${category}`);
    this.isMobileMenuOpen = false;
    this.isCategoryDropdownOpen = false; // Close the dropdown after selection
    this.isMobileCategoryDropdownOpen = false; // Close mobile dropdown after selection
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click', ['$event'])
  clickOut(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Close profile dropdown if clicked outside
    if (!target.closest('.relative') && this.isProfileDropdownOpen) {
      this.isProfileDropdownOpen = false;
    }

    // Close category dropdowns if clicked outside
    if (!target.closest('.relative') && this.isCategoryDropdownOpen) {
      this.isCategoryDropdownOpen = false;
    }

    // Close mobile category dropdown if clicked outside
    if (!target.closest('.relative') && this.isMobileCategoryDropdownOpen) {
      this.isMobileMenuOpen = false;
      this.isMobileCategoryDropdownOpen = false;
    }
  }
  // using from html so commented here
  // navigateToCategories() {
  //   this.router.navigate(['/home'], { fragment: 'categories' });
  // }

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onConfirm() {
    console.log("Confirmed action!");
    this.signup();
    this.closeModal();
  }

  signup() {


    // Output form data for demonstration; handle your sign-up logic here
    console.log('Form Submitted', this.signupForm.value);
  }
}

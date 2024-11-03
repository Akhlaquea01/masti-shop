import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces';

@Component({
  selector: 'masTi-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  isLoginMode: boolean = true;
  confirmPassword: string = '';
  signupData: User = {
    name: '',
    email: '',
    password: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    role: 'user',
    wishlist: [],
    cart: []
  };


  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.clearForm();
  }

  login() {
    if (this.authService.login(this.signupData.email, this.signupData.password)) {
      this.router.navigate(['/home']);
    }
  }

  signup() {
    if (this.signupData.password !== this.confirmPassword) {
      console.log('Passwords do not match.');
      return;
    }
    this.authService.singUp(this.signupData);
    this.router.navigate(['/home']);

  }

  clearForm() {
    this.signupData = {
      name: '',
      email: '',
      password: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      },
      role: 'user',
      wishlist: [],
      cart: []
    }
    this.confirmPassword = '';
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'masTi-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  isLoginMode = true;
  username = '';
  password = '';
  confirmPassword = '';
  // name = '';
  // email = '';
  loginError = '';
  signupError = '';
  signupData = {
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
  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.clearForm();
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']); // Redirect to home or dashboard
    } else {
      this.loginError = 'Invalid username or password!';
    }
  }

  signup() {
    
    // if (this.password !== this.confirmPassword) {
    //   this.signupError = "Passwords do not match.";
    //   return;
    // }
  }

  clearForm() {
    
  }
}

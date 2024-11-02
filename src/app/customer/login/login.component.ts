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
  name = '';
  email = '';
  phoneNumber = '';
  address = '';
  loginError = '';
  signupError = '';


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
    if (!this.username || !this.password || !this.confirmPassword || !this.name || !this.email || !this.phoneNumber || !this.address) {
      this.signupError = "Please fill in all fields.";
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.signupError = "Passwords do not match.";
      return;
    }
    console.log("Signed up with:", {
      username: this.username,
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      password: this.password
    });
  }

  clearForm() {
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.address = '';
    this.loginError = '';
    this.signupError = '';
  }
}

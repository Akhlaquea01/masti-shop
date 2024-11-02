import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'masTi-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}

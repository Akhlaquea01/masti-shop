import { Injectable } from '@angular/core';
import { User } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(email: string, password: string): string | boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');

    if (!storedUser) {
      return 'User not found. Please sign up.';
    }

    // Verify email and password
    if (storedUser.email === email && storedUser.password === password) {
      this.isAuthenticated = true;
      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify(storedUser));
      return true;
    } else {
      return 'Incorrect email or password.';
    }
  }

  singUp(user: User) {
    this.isAuthenticated = true;
    localStorage.setItem('auth', 'true');
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('auth');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('auth') === 'true';
  }
}
